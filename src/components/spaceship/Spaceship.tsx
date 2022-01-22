import { useActiveKeys } from "../../helpers/useActiveKeys";
import React, { FC, useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";
import spaceship from "./spaceship.png";
import { useThrottleCallback } from "@react-hook/throttle";
import { Position, Rotation } from "../../helpers/types";
import { move } from "../../helpers/move";

export type ShootHandler = (i: {origin: Position, direction: Rotation}) => void

type SpaceshipProps = {
  onShoot: ShootHandler
}

export const Spaceship: FC<SpaceshipProps> = ({onShoot}) => {
  const activeKeys = useActiveKeys()

  const [rotation, setRotation] = useState<Rotation>( 0)
  const [position, setPosition] = useState<Position>({x: 0, y: 0})

  const shoot = useThrottleCallback(onShoot, 6)

  useTick((delta) => {
    if(activeKeys.includes('ArrowLeft')) {
      setRotation(prev => prev - 0.1 * delta)
    }

    if(activeKeys.includes('ArrowRight')) {
      setRotation(prev => prev + 0.1 * delta)
    }

    if (activeKeys.includes('ArrowUp')) {
      setPosition((prev) => move(prev, rotation, 3 * delta))
    }

    if(activeKeys.includes(' ')) {
      shoot({origin: position, direction: rotation})
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
