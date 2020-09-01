import React, { useRef, useEffect } from 'react'
import * as Style from './index.style'
import { HeartAnimation } from './draw'

/**
 * canvas 画心
 */
const Heart = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const animate = new HeartAnimation(canvasRef.current)
    animate.draw()
  }, [])

  return <Style.Canvas ref={canvasRef}></Style.Canvas>
}

export default Heart
