import { Application, Graphics, Container, Text, TextStyle } from 'pixi.js'
import { io, Socket } from 'socket.io-client'
import { GameState, GameObject, GameObjectType, ServerToClientEvents, ClientToServerEvents } from '@game-shared'

class BirdJumpGame {
  private app: Application
  private socket: Socket<ServerToClientEvents, ClientToServerEvents>
  private gameState: GameState | null = null
  private gameObjects: Map<string, Graphics> = new Map()
  private birdSprite: Graphics | null = null
  private isJumping = false

  constructor() {
    this.app = new Application()
    this.socket = io('http://localhost:3001')
    
    this.init()
  }

  private async init() {
    await this.app.init({
      width: 800,
      height: 600,
      backgroundColor: 0x87CEEB
    })

    const container = document.getElementById('game-container')
    if (container) {
      container.appendChild(this.app.canvas)
    }

    this.setupEventListeners()
    this.setupSocketListeners()
    this.gameLoop()
  }

  private setupEventListeners() {
    // Keyboard events
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault()
        this.jump()
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault()
        this.moveLeft()
      } else if (event.code === 'ArrowRight') {
        event.preventDefault()
        this.moveRight()
      } else if (event.code === 'ArrowDown') {
        event.preventDefault()
        this.fallDown()
      }
    })

    document.addEventListener('keyup', (event) => {
      if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        event.preventDefault()
        this.stopHorizontalMovement()
      } else if (event.code === 'ArrowDown') {
        event.preventDefault()
        this.stopFalling()
      }
    })

    // Mouse/touch events
    this.app.canvas.addEventListener('click', () => {
      this.jump()
    })

    this.app.canvas.addEventListener('touchstart', (event) => {
      event.preventDefault()
      this.jump()
    })
  }

  private setupSocketListeners() {
    this.socket.on('gameStateUpdate', (state: GameState) => {
      this.gameState = state
      this.updateUI(state)
      this.updateGameObjects(state.gameObjects)
    })

    this.socket.on('gameEvent', (event) => {
      console.log('Game event:', event)
    })

    this.socket.on('connect', () => {
      console.log('Connected to game server')
      this.socket.emit('joinGame', 'Player')
    })
  }

  private jump() {
    if (!this.isJumping && this.gameState && !this.gameState.isGameOver) {
      this.isJumping = true
      this.socket.emit('birdJump')
      
      // Reset jump flag after a short delay
      setTimeout(() => {
        this.isJumping = false
      }, 200)
    }
  }

  private moveLeft() {
    if (this.gameState && !this.gameState.isGameOver) {
      this.socket.emit('birdMove', { direction: 'left' })
    }
  }

  private moveRight() {
    if (this.gameState && !this.gameState.isGameOver) {
      this.socket.emit('birdMove', { direction: 'right' })
    }
  }

  private stopHorizontalMovement() {
    if (this.gameState && !this.gameState.isGameOver) {
      this.socket.emit('birdMove', { direction: 'stop' })
    }
  }

  private fallDown() {
    if (this.gameState && !this.gameState.isGameOver) {
      this.socket.emit('birdMove', { direction: 'down' })
    }
  }

  private stopFalling() {
    if (this.gameState && !this.gameState.isGameOver) {
      this.socket.emit('birdMove', { direction: 'stop' })
    }
  }

  private updateUI(state: GameState) {
    const scoreElement = document.getElementById('score')
    const healthElement = document.getElementById('health')
    const levelElement = document.getElementById('level')

    if (scoreElement) scoreElement.textContent = state.score.toString()
    if (healthElement) healthElement.textContent = state.playerHealth.toString()
    if (levelElement) levelElement.textContent = state.level.toString()
  }

  private updateGameObjects(objects: GameObject[]) {
    // Clear existing sprites
    this.gameObjects.forEach(sprite => {
      this.app.stage.removeChild(sprite)
    })
    this.gameObjects.clear()

    // Create new sprites
    objects.forEach(obj => {
      const sprite = this.createSprite(obj)
      this.gameObjects.set(obj.id, sprite)
      this.app.stage.addChild(sprite)
    })
  }

  private createSprite(obj: GameObject): Graphics {
    const sprite = new Graphics()

    switch (obj.type) {
      case GameObjectType.BIRD:
        // Draw bird (simple circle with triangle for beak)
        sprite.beginFill(0xFFD700) // Gold color
        sprite.drawCircle(obj.size.x / 2, obj.size.y / 2, obj.size.x / 2)
        sprite.endFill()
        
        // Beak
        sprite.beginFill(0xFFA500) // Orange
        sprite.drawPolygon([
          obj.size.x, obj.size.y / 2,
          obj.size.x + 8, obj.size.y / 2 - 4,
          obj.size.x + 8, obj.size.y / 2 + 4
        ])
        sprite.endFill()
        
        // Eye
        sprite.beginFill(0x000000)
        sprite.drawCircle(obj.size.x / 2 + 4, obj.size.y / 2 - 4, 3)
        sprite.endFill()
        break

      case GameObjectType.FIREBALL:
        // Draw fireball (red circle with flame effect)
        sprite.beginFill(0xFF4500) // Red-orange
        sprite.drawCircle(obj.size.x / 2, obj.size.y / 2, obj.size.x / 2)
        sprite.endFill()
        
        // Flame effect
        sprite.beginFill(0xFF6347) // Tomato
        sprite.drawCircle(obj.size.x / 2, obj.size.y / 2, obj.size.x / 3)
        sprite.endFill()
        break

      case GameObjectType.PLATFORM:
        // Draw platform (brown rectangle)
        sprite.beginFill(0x8B4513) // Saddle brown
        sprite.drawRect(0, 0, obj.size.x, obj.size.y)
        sprite.endFill()
        break
    }

    sprite.x = obj.position.x
    sprite.y = obj.position.y

    return sprite
  }

  private gameLoop() {
    this.app.ticker.add(() => {
      // Smooth interpolation for visual updates
      this.interpolateGameObjects()
    })
  }

  private interpolateGameObjects() {
    // Add smooth interpolation between server updates
    // This helps reduce visual stuttering when network updates are delayed
    this.gameObjects.forEach((sprite, id) => {
      if (this.gameState) {
        const serverObj = this.gameState.gameObjects.find(obj => obj.id === id)
        if (serverObj) {
          // Smooth interpolation towards server position
          const lerpFactor = 0.1
          sprite.x += (serverObj.position.x - sprite.x) * lerpFactor
          sprite.y += (serverObj.position.y - sprite.y) * lerpFactor
        }
      }
    })
  }
}

// Start the game
new BirdJumpGame()
