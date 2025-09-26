# Bird Jump Game - Monorepo Example

A 2D bird jumping game built with Pixi.js, demonstrating a modern JavaScript monorepo architecture with Vite.

## Game Description

The player controls a bird that must jump to avoid incoming fireballs. The goal is to survive as long as possible and achieve the highest score.

## Architecture

This monorepo contains:

- **`packages/game-shared`** - Shared types, utilities, and game logic
- **`packages/game-client`** - React + Pixi.js frontend with Vite
- **`packages/game-server`** - Node.js server with Socket.io

## Getting Started

### Prerequisites

- Node.js 20+ (recommended for best performance)
- npm or pnpm (pnpm recommended for workspace support)

### Installation

```bash
# Install all dependencies
npm run install:all

# Or install manually
npm install
cd packages/game-shared && npm install
cd ../game-client && npm install  
cd ../game-server && npm install
```

### Development

```bash
# Start the game server
npm run dev:server

# In another terminal, start the game client
npm run dev
```

The game will be available at `http://localhost:3000`

### Building

```bash
# Build all packages
npm run build
```

## Game Controls

- **SPACE** or **Click** - Make the bird jump
- **Touch** - Make the bird jump (mobile)

## Features

- Real-time multiplayer support via WebSocket
- Shared TypeScript types across client and server
- Pixi.js for smooth 2D graphics
- Vite for fast development and building
- Monorepo workspace management

## Project Structure

```
bird-jump-game/
├── packages/
│   ├── game-shared/          # Shared types and utilities
│   ├── game-client/          # Pixi.js frontend
│   └── game-server/          # Node.js backend
├── package.json              # Root workspace config
└── tsconfig.json             # Shared TypeScript config
```

## Technologies Used

- **Frontend**: Pixi.js, TypeScript, Vite
- **Backend**: Node.js, Express, Socket.io
- **Shared**: TypeScript, Common utilities
- **Build**: Vite, TypeScript compiler
- **Monorepo**: npm workspaces

This project demonstrates how Vite makes JavaScript monorepos efficient and enjoyable to work with!
