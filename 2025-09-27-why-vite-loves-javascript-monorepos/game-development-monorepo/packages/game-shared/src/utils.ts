import { Vector2D, GameObject, GameObjectType } from './types'

export function createVector2D(x: number, y: number): Vector2D {
  return { x, y }
}

export function addVectors(a: Vector2D, b: Vector2D): Vector2D {
  return { x: a.x + b.x, y: a.y + b.y }
}

export function multiplyVector(vector: Vector2D, scalar: number): Vector2D {
  return { x: vector.x * scalar, y: vector.y * scalar }
}

export function distance(a: Vector2D, b: Vector2D): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

export function checkCollision(obj1: GameObject, obj2: GameObject): boolean {
  const left1 = obj1.position.x
  const right1 = obj1.position.x + obj1.size.x
  const top1 = obj1.position.y
  const bottom1 = obj1.position.y + obj1.size.y

  const left2 = obj2.position.x
  const right2 = obj2.position.x + obj2.size.x
  const top2 = obj2.position.y
  const bottom2 = obj2.position.y + obj2.size.y

  return !(right1 < left2 || left1 > right2 || bottom1 < top2 || top1 > bottom2)
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function createBird(position: Vector2D): GameObject {
  return {
    id: generateId(),
    position,
    velocity: createVector2D(0, 0),
    size: createVector2D(32, 32),
    type: GameObjectType.BIRD
  }
}

export function createFireball(position: Vector2D, velocity: Vector2D): GameObject {
  return {
    id: generateId(),
    position,
    velocity,
    size: createVector2D(24, 24),
    type: GameObjectType.FIREBALL
  }
}

export function createPlatform(position: Vector2D, width: number, height: number): GameObject {
  return {
    id: generateId(),
    position,
    velocity: createVector2D(0, 0),
    size: createVector2D(width, height),
    type: GameObjectType.PLATFORM
  }
}
