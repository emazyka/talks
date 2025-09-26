import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { GameEngine } from './game-engine'
import { ServerToClientEvents, ClientToServerEvents } from '@bird-jump/game-shared'

const app = express()
const server = createServer(app)
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

const gameEngine = new GameEngine()

// Game loop
const TARGET_FPS = 60
const FRAME_TIME = 1000 / TARGET_FPS
let lastTime = 0

function gameLoop(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000 // Convert to seconds
  lastTime = currentTime

  gameEngine.update(deltaTime)

  // Broadcast game state to all connected clients
  const gameState = gameEngine.getGameState()
  io.emit('gameStateUpdate', gameState)

  setTimeout(() => {
    gameLoop(Date.now())
  }, FRAME_TIME)
}

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Player connected:', socket.id)

  // Send initial game state
  const gameState = gameEngine.getGameState()
  socket.emit('gameStateUpdate', gameState)

  // Handle player events
  socket.on('joinGame', (playerName: string) => {
    console.log(`Player ${playerName} joined the game`)
    socket.emit('playerJoined', {
      id: socket.id,
      name: playerName,
      score: 0,
      isOnline: true
    })
  })

  socket.on('birdJump', () => {
    gameEngine.jump()
  })

  socket.on('birdMove', (data) => {
    gameEngine.moveBird(data.direction)
  })

  socket.on('pauseGame', () => {
    gameEngine.pause()
  })

  socket.on('resumeGame', () => {
    gameEngine.pause() // Toggle pause
  })

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id)
    io.emit('playerLeft', socket.id)
  })
})

// Start the server
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Game server running on port ${PORT}`)
  console.log(`WebSocket server ready for connections`)
  
  // Start the game loop
  gameLoop(Date.now())
})

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down game server...')
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})
