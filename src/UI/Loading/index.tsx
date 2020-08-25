import React from 'react'
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
