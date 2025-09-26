export interface Vector2D {
  x: number
  y: number
}

export interface GameObject {
  id: string
  position: Vector2D
  velocity: Vector2D
  size: Vector2D
  type: GameObjectType
}

export enum GameObjectType {
  BIRD = 'bird',
  FIREBALL = 'fireball',
  PLATFORM = 'platform'
}

export interface Bird extends GameObject {
  type: GameObjectType.BIRD
  isJumping: boolean
  jumpPower: number
  health: number
}

export interface Fireball extends GameObject {
  type: GameObjectType.FIREBALL
  damage: number
  speed: number
}

export interface Platform extends GameObject {
  type: GameObjectType.PLATFORM
  width: number
  height: number
}

export interface GameState {
  score: number
  level: number
  gameObjects: GameObject[]
  isGameOver: boolean
  isPaused: boolean
  playerHealth: number
}

export interface GameEvent {
  type: 'bird_jump' | 'fireball_spawn' | 'collision' | 'score_update' | 'game_over'
  payload: any
  timestamp: number
}

export interface Player {
  id: string
  name: string
  score: number
  isOnline: boolean
}

// WebSocket event types
export interface ServerToClientEvents {
  gameStateUpdate: (state: GameState) => void
  playerJoined: (player: Player) => void
  playerLeft: (playerId: string) => void
  gameEvent: (event: GameEvent) => void
}

export interface ClientToServerEvents {
  joinGame: (playerName: string) => void
  birdJump: () => void
  birdMove: (data: { direction: 'left' | 'right' | 'down' | 'stop' }) => void
  pauseGame: () => void
  resumeGame: () => void
}
