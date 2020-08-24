import React from 'react'
import * as Style from './index.style.js'

const boyAvatar = 'http://sharminh.top/images/boy-avatar.jpg'
const girlAvatar = 'http://sharminh.top/images/girl-avatar.jpg'

const Portrait = () => {
  return (
    <Style.Container>
      <Style.HeadPortrait>
        <img className="avatar" src={boyAvatar} alt="" />
      </Style.HeadPortrait>
      <div className="h-line"></div>
      <span className="heart">♥</span>
      <div className="h-line"></div>
      <Style.HeadPortrait>
        <img className="avatar" src={girlAvatar} alt="" />
      </Style.HeadPortrait>
    </Style.Container>
  )
}

export default Portrait
