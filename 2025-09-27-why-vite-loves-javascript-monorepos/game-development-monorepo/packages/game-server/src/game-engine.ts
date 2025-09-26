import { 
  GameState, 
  GameObject, 
  GameObjectType, 
  Vector2D, 
  GameEvent,
  createVector2D,
  createBird,
  createFireball,
  createPlatform,
  checkCollision,
  generateId,
  randomBetween
} from '@bird-jump/game-shared'

export class GameEngine {
  private gameState: GameState
  private gameObjects: Map<string, GameObject> = new Map()
  private birdId: string | null = null
  private lastFireballSpawn = 0
  private fireballSpawnInterval = 2000 // 2 seconds
  private gravity = 0.3
  private jumpPower = -8
  private groundY = 550
  private maxFallSpeed = 8
  private airResistance = 0.98
  private moveSpeed = 4
  private fallSpeed = 6
  private currentMoveDirection: 'left' | 'right' | 'down' | 'stop' = 'stop'

  constructor() {
    this.gameState = {
      score: 0,
      level: 1,
      gameObjects: [],
      isGameOver: false,
      isPaused: false,
      playerHealth: 100
    }

    this.initializeGame()
  }

  private initializeGame() {
    // Create the bird
    const bird = createBird(createVector2D(100, this.groundY - 32))
    this.birdId = bird.id
    this.gameObjects.set(bird.id, bird)

    // Create initial platforms
    this.createPlatforms()

    this.updateGameState()
  }

  private createPlatforms() {
    // Create ground platform
    const ground = createPlatform(createVector2D(0, this.groundY), 800, 50)
    this.gameObjects.set(ground.id, ground)

    // Create some floating platforms
    for (let i = 0; i < 3; i++) {
      const x = 200 + i * 200
      const y = this.groundY - 100 - i * 50
      const platform = createPlatform(createVector2D(x, y), 100, 20)
      this.gameObjects.set(platform.id, platform)
    }
  }

  public update(deltaTime: number) {
    if (this.gameState.isPaused || this.gameState.isGameOver) {
      return
    }

    this.updateBird(deltaTime)
    this.updateFireballs(deltaTime)
    this.spawnFireballs()
    this.checkCollisions()
    this.updateGameState()
  }

  private updateBird(deltaTime: number) {
    if (!this.birdId) return

    const bird = this.gameObjects.get(this.birdId)
    if (!bird) return

    // Apply gravity with smoother acceleration
    bird.velocity.y += this.gravity * deltaTime * 60 // Normalize for 60fps

    // Limit fall speed for smoother movement
    if (bird.velocity.y > this.maxFallSpeed) {
      bird.velocity.y = this.maxFallSpeed
    }

    // Handle horizontal movement
    if (this.currentMoveDirection === 'left') {
      bird.velocity.x = -this.moveSpeed
    } else if (this.currentMoveDirection === 'right') {
      bird.velocity.x = this.moveSpeed
    } else if (this.currentMoveDirection === 'down') {
      // Force fall down faster
      bird.velocity.y = this.fallSpeed
    } else if (this.currentMoveDirection === 'stop') {
      // Apply air resistance for smoother horizontal movement
      bird.velocity.x *= this.airResistance
    }

    // Update position with frame-rate independent movement
    bird.position.x += bird.velocity.x * deltaTime * 60
    bird.position.y += bird.velocity.y * deltaTime * 60

    // Keep bird on screen
    bird.position.x = Math.max(0, Math.min(800 - bird.size.x, bird.position.x))

    // Check ground collision
    if (bird.position.y >= this.groundY - bird.size.y) {
      bird.position.y = this.groundY - bird.size.y
      bird.velocity.y = 0
    }

    this.gameObjects.set(bird.id, bird)
  }

  private updateFireballs(deltaTime: number) {
    const fireballs = Array.from(this.gameObjects.values())
      .filter(obj => obj.type === GameObjectType.FIREBALL)

    fireballs.forEach(fireball => {
      // Move fireball left
      fireball.position.x += fireball.velocity.x * deltaTime

      // Remove fireballs that are off screen
      if (fireball.position.x < -fireball.size.x) {
        this.gameObjects.delete(fireball.id)
        this.gameState.score += 10 // Score for avoiding fireball
      } else {
        this.gameObjects.set(fireball.id, fireball)
      }
    })
  }

  private spawnFireballs() {
    const now = Date.now()
    if (now - this.lastFireballSpawn > this.fireballSpawnInterval) {
      const y = randomBetween(100, this.groundY - 100)
      const fireball = createFireball(
        createVector2D(850, y),
        createVector2D(-3, 0)
      )
      
      this.gameObjects.set(fireball.id, fireball)
      this.lastFireballSpawn = now

      // Increase difficulty over time
      if (this.gameState.score > 0 && this.gameState.score % 100 === 0) {
        this.fireballSpawnInterval = Math.max(500, this.fireballSpawnInterval - 100)
      }
    }
  }

  private checkCollisions() {
    if (!this.birdId) return

    const bird = this.gameObjects.get(this.birdId)
    if (!bird) return

    const fireballs = Array.from(this.gameObjects.values())
      .filter(obj => obj.type === GameObjectType.FIREBALL)

    fireballs.forEach(fireball => {
      if (checkCollision(bird, fireball)) {
        this.handleCollision(bird, fireball)
      }
    })

    // Check platform collisions for landing
    const platforms = Array.from(this.gameObjects.values())
      .filter(obj => obj.type === GameObjectType.PLATFORM && obj.id !== 'ground')

    platforms.forEach(platform => {
      if (checkCollision(bird, platform) && bird.velocity.y > 0) {
        bird.position.y = platform.position.y - bird.size.y
        bird.velocity.y = 0
        this.gameObjects.set(bird.id, bird)
      }
    })
  }

  private handleCollision(bird: GameObject, fireball: GameObject) {
    this.gameState.playerHealth -= 20
    this.gameObjects.delete(fireball.id)

    if (this.gameState.playerHealth <= 0) {
      this.gameState.isGameOver = true
    }

    // Emit collision event
    this.emitGameEvent({
      type: 'collision',
      payload: { birdId: bird.id, fireballId: fireball.id },
      timestamp: Date.now()
    })
  }

  public jump() {
    if (!this.birdId || this.gameState.isGameOver) return

    const bird = this.gameObjects.get(this.birdId)
    if (!bird) return

    // Smoother jump with reduced power
    bird.velocity.y = this.jumpPower
    this.gameObjects.set(bird.id, bird)

    this.emitGameEvent({
      type: 'bird_jump',
      payload: { birdId: bird.id },
      timestamp: Date.now()
    })
  }

  public moveBird(direction: 'left' | 'right' | 'down' | 'stop') {
    this.currentMoveDirection = direction
  }

  public pause() {
    this.gameState.isPaused = !this.gameState.isPaused
  }

  public getGameState(): GameState {
    return { ...this.gameState }
  }

  public getGameObjects(): GameObject[] {
    return Array.from(this.gameObjects.values())
  }

  private updateGameState() {
    this.gameState.gameObjects = this.getGameObjects()
  }

  private emitGameEvent(event: GameEvent) {
    // This would be connected to the socket server to emit events
    console.log('Game event:', event)
  }

  public reset() {
    this.gameObjects.clear()
    this.gameState = {
      score: 0,
      level: 1,
      gameObjects: [],
      isGameOver: false,
      isPaused: false,
      playerHealth: 100
    }
    this.lastFireballSpawn = 0
    this.fireballSpawnInterval = 2000
    this.initializeGame()
  }
}
