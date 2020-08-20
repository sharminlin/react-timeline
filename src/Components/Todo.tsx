import React from 'react'

interface State {
  itemText: string
}

interface InputSetting {
  placeholder: string
  maxLength: number
}

export class TodoInputProps {
  public handleSubmit!: (value: string) => void
  public inputSetting?: InputSetting = {
    maxLength: 20,
    placeholder: '请输入todo'
  }
}

export class TodoInput extends React.Component<TodoInputProps, State> {
  public static defaultProps = new TodoInputProps()

  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props: TodoInputProps) {
    super(props)
    this.state = {
      itemText: ''
    }
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!this.state.itemText.trim()) {
      return
    }

    this.props.handleSubmit(this.state.itemText)
    this.setState({ itemText: '' })
  }

  private updateValue (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ itemText: e.target.value })
  }

  render () {
    const { itemText } = this.state
    const { updateValue, handleSubmit } = this
    const { inputSetting } = this.props

    return (
      <form onSubmit={handleSubmit} >
        <input type="text"
          ref={this.inputRef}
          className="edit"
          value={itemText}
          onInput={updateValue}
          placeholder={inputSetting!.placeholder}
          maxLength={inputSetting!.maxLength}
        />
        <button type="submit">添加</button>
      </form>
    )
  }
}

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type FunctionPropertyNames<P> = { [K in keyof P]: P[K] extends Function ? K : never }[keyof P]
type R = FunctionPropertyNames<Part>;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<string | number>;