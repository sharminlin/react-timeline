import React from 'react'
import ReactDOM from 'react-dom';
import * as Style from './index.style'

// 动画类型
type LoadingType = 'typing' | 'circle'

interface LoadingProps {
  show?: boolean,
  type?: LoadingType
}

const loadingTypeMap = {
  typing: <Style.TypingLoader></Style.TypingLoader>,
  circle: <Style.CircleLoader></Style.CircleLoader>
}

const Loading = ({ show = false, type = 'typing' }: LoadingProps) => {
  return show ? (
    <Style.Container>
      {loadingTypeMap[type]}
    </Style.Container>
  ) : null
}

export default Loading

export const $loading = (props: LoadingProps) => {
  let $el = document.createElement('div')
  document.body.appendChild($el);
  function render (props: LoadingProps): void {
    ReactDOM.render(<Loading { ...props } /> ,$el)
  }

  function update (props: LoadingProps) {
    render(props)
  }

  function destroy () {
    document.body.removeChild($el)
  }

  render(props)

  return {
    update,
    destroy
  }
}
