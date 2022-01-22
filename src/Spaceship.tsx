import { useActiveKeys } from "./useActiveKeys";
import React, { useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";
import spaceship from "./spaceship.png";

export const Spaceship = () => {
  const activeKeys = useActiveKeys()

  const [rotation, setRotation] = useState<number>( 0)
  const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0})

  useTick((delta) => {
    setRotation(r => {
      if(activeKeys.includes('ArrowLeft')) return (r - 0.1 * delta)
      if(activeKeys.includes('ArrowRight')) return (r + 0.1 * delta)
      return r
    })

    if (activeKeys.includes('ArrowUp')) {
      setPosition(({x, y}) => ({
        x: x + Math.cos(rotation - Math.PI/2) * 3 * delta,
        y: y + Math.sin(rotation - Math.PI/2) * 3 * delta,
      }))
    }
  })

  return (
    <Sprite
      image={spaceship}
      scale={{ x: 0.1, y: 0.1 }}
      anchor={0.5}
      rotation={rotation}
      {...position}
    />
  )
}
