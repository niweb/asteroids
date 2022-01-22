import { Position, Rotation } from "./types";

export const move = (origin: Position, direction: Rotation, speed: number): Position => ({
    x: origin.x + Math.cos(direction - Math.PI/2) * speed,
    y: origin.y + Math.sin(direction - Math.PI/2) * speed,
  })
