import React, { useState, useEffect } from 'react'
import * as Style from './index.style.js'
import { diffTime } from '../../../util/date'

const loveDate = '2019-10-19'

const getFormatTime: () => string = () => {
  const { days, hours, minutes, seconds } = diffTime(loveDate, Date.now())
  return `${days}天${hours}小时${minutes}分${seconds}秒`
}

const Timer = () => {
  const [ time, setTime ] = useState(getFormatTime())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getFormatTime())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <Style.Container>
      <div className="label-timer">We Have Fallen In Love For</div>
      <div className="timer" data-text={time}>
        {Array.prototype.map.call(time, (s, index) => <span className="text" data-text={s} key={index}>{s}</span>)}
      </div>
    </Style.Container>
  )
}

export default Timer