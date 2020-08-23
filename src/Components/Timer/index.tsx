import React, { useState, useEffect } from 'react'
import * as Style from './index.style.js'
import { diffTime } from '../../util/utils'

const Timer = () => {
  const [ time, setTime ] = useState('')

  useEffect(() => {
    const timerId = setInterval(() => {
      const { days, hours, minutes, seconds } = diffTime('2019-10-19', Date.now())
      setTime(`${days}天${hours}小时${minutes}分${seconds}秒`)
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <Style.Container>
      <div className="label-timer">我们在一起已经</div>
      <div className="timer">{time}</div>
    </Style.Container>
  )
}

export default Timer