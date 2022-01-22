import React, { FC, useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";
import logo from "./bullet.svg";
import { Position, Rotation } from "../../helpers/types";
import { move } from "../../helpers/move";

export type BulletProps = {
  origin: Position
  direction: Rotation
}

export const Bullet: FC<BulletProps> = ({origin, direction}) => {
  const [position, setPosition] = useState(origin)

  useTick(delta => {
    setPosition(prev => move(prev, direction, delta * 10))
  })

  return (
    <Sprite
      image={logo}
      scale={{ x: 0.1, y: 0.1 }}
      anchor={0.5}
      rotation={direction}
      {...position}
    />
  )
}
