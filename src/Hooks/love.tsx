import React, { useCallback } from 'react'
import { useImmer } from 'use-immer'
import styled, { keyframes } from 'styled-components';
import { getUid } from '../util/utils'


interface LoveItem {
  x: number,
  y: number
}

interface LoveMap {
  [propName: string]: LoveItem
}

const LoveAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
    font-size: 1rem;
  }
  100% {
    opacity: 0;
    transform: translateY(-4rem);
    font-size: 1.4rem;
  }
`

const LoveNode = styled.span`
  position: fixed;
  z-index: 2;
  color: rgb(255, 192, 203);
  animation: ${LoveAnimation} 3s 1 forwards;
`

export const useTapLove = () => {
  const [ loveMap, setLoveMap ] = useImmer<LoveMap>({})

  function createLove (e: any) {
    const { clientX, clientY } = e

    const key = getUid()
    setLoveMap((map: LoveMap) => {
      map[key] = { x: clientX, y: clientY }
    })

    // 3s之后清除
    setTimeout(() => {
      setLoveMap((map: LoveMap) => {
        delete map[key]
      })
    }, 3000)
  }

  const renderLove = useCallback(() => {
    const keys = Object.keys(loveMap)
    return keys.length > 0
      ? keys.map(key => (
        <LoveNode key={key} style={{ left: loveMap[key].x, top: loveMap[key].y }}>♥</LoveNode>)
      )
      : null 
  }, [loveMap])

  return { createLove, renderLove }
}
