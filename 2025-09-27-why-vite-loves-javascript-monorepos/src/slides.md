---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
lang: en
glowSeed: 4
favicon: /favicon.ico
title: Why Vite ♥ JavaScript Monorepos
addons:
  - slidev-addon-graph
---



<div abs-tl mx-18 my-16 text-xs flex="~ col items-center" text-left>
  <h1>
    <img src="/vite-logo.svg" w30  />
    <span>Why Vite ♥ <br/>JavaScript Monorepos</span>
  </h1>
</div>

<div abs-br mx-18 my-11 text-xs flex="~ col items-center" text-left>
  <img src="/Voxxed-Days-Crete-logo-white-768x214.png" w22 mb3/>
  <span text-xs>Voxxed Days Crete 2025</span>
  <div text-xs opacity-75>September 27th 2025</div>
</div>

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

# Ema Zyka

<div class="leading-10 opacity-80 s">
<div flex="~ gap-3" items-center>
    <div>Principal Software Engineer / <img src="/logo-w.png" inline w25></div>
</div>

<div flex="~ gap-2" items-center>
    <div>Co-organizer / Vue.js Athens meetup</div>
    <div i-logos-vue />
</div>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-logos-linkedin-icon op50 ma text-xl />
  <div><a href="https://www.linkedin.com/in/emazyka" target="_blank" class="border-none! font-300">emazyka</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/emazyka" target="_blank" class="border-none! font-300">emazyka</a></div>
</div>

<img src="/ema-zyka-2022-b.jpg" rounded-full w-50 abs-tr mt-32 mr-40 />

---
layout: center
---

# What is a Monorepo?

<div v-click class="text-lg opacity-80 mb-6">
A single git repository containing multiple packages
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Company Examples</div>
    - Stripe: Separate monorepos per language
    - Babel: Open source with multiple packages
    - Each package has its own NPM version
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Key Benefits</div>
    - Single PR for multiple packages
    - No manual dependency propagation
    - Unified testing across dependencies
  </div>
</div>

---
layout: center
---

# The Monorepo vs Polyrepo Problem

<div v-click class="text-lg opacity-80 mb-6">
Why dependency management gets complex
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Polyrepo Pain</div>
    - Change in library A
    - Update all dependent repos manually
    - Run NPM install everywhere
    - Propagate through dependency layers
    - Teams fall years behind on updates
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold text-green-400">Monorepo Solution</div>
    - Single PR touches multiple packages
    - No follow-up steps needed
    - Run entire test suite easily
    - Validate whole project composition
    - Keep everything in sync
  </div>
</div>

---
layout: center
---

# What We'll Build Today

<div v-click class="text-lg opacity-80 mb-6">
A game development monorepo with shared packages
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30">
    <div class="font-bold">Game Architecture</div>
    - Game Client (React + Pixi.js)
    - Game Server (Node.js + Socket.io)
    - Shared packages (types, utilities)
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Monorepo Features</div>
    - Automatic package linking
    - Dependency-aware testing
    - Unified build processes
    - Type-safe communication
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Real-world example with production-ready architecture<br/>
⚡ Lightning-fast development with Vite<br/>
📦 Scalable package management
</div>

---
layout: center
---

# 🧩 Monorepos & Micro Frontends

<div v-click class="text-lg opacity-80 mb-6">
Perfect companions for scalable frontend architecture
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Micro Frontend Benefits</div>
    - Compose UI from subparts
    - Strong encapsulation
    - Independent deployments
    - Team autonomy
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Monorepo Advantages</div>
    - Each micro frontend as a package
    - Controlled contracts between parts
    - Shared tooling and conventions
    - Unified development workflow
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Best of both worlds: modularity + coordination<br/>
🔄 Single PR can update multiple micro frontends<br/>
📦 Shared dependencies and build processes
</div>

---
layout: center
---

# 📚 Library Development with Monorepos

<div v-click class="text-lg opacity-80 mb-6">
When one project needs multiple distribution formats
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30">
    <div class="font-bold">Example: Image Processing Tool</div>
    - Core library package
    - CLI package for terminal use
    - Web interface package
    - Shared utilities package
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Monorepo Benefits</div>
    - Single git commit for all formats
    - Synchronized feature development
    - Shared type definitions
    - Unified versioning
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 One codebase, multiple distribution channels<br/>
🔄 Keep all formats in sync automatically<br/>
📦 Shared dependencies and testing
</div>

---
layout: center
---

# ⚡ Turbo vs NX: The Build Tool Battle

<div v-click class="text-lg opacity-80 mb-6">
Both excel at cached task execution
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Cached Tasks Concept</div>
    - Pure functions: same input = same output
    - Skip repeated work (linting, testing)
    - Fingerprint inputs to cache outputs
    - Massive speed improvements
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Cloud Caching</div>
    - Share cache across team
    - CI/CD benefits from cached results
    - Distributed build acceleration
    - Both tools offer this feature
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
⚡ Incredible speedup for deterministic tasks<br/>
☁️ Team-wide cache sharing<br/>
🔄 Both tools work similarly well
</div>

---
layout: center
---

# 🤔 When to Choose Monorepo vs Polyrepo?

<div v-click class="text-lg opacity-80 mb-6">
Key indicators for your decision
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold text-green-400">Choose Monorepo When:</div>
    - High package interrelatedness
    - Sophisticated shared tooling
    - Pain keeping teams upgraded
    - Need unified conventions
    - Example: Babel ecosystem
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Stick with Polyrepo When:</div>
    - Self-contained libraries
    - No clear division points
    - Simple CLI tools
    - Setup overhead not worth it
    - Independent projects
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Consider the interrelatedness of your packages<br/>
⚖️ Balance setup complexity vs long-term benefits<br/>
🔄 Start simple, evolve as needed
</div>

---
layout: center
---

# 🎮 The Development Challenge

<div v-click class="text-lg opacity-80 mb-8">
Building a game with shared code across multiple apps
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Game Client</div>

    - Game UI
    - Game state management
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30">
    <div class="font-bold">Game Server</div>

    - Node.js + Socket.io
    - Game logic
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30" mt4>
  <div class="font-bold">Shared Packages</div>

  - Common game entities & types
  - Shared utilities
</div>

---
layout: center
---

# 🏗️ The Monorepo Structure

```md
game-monorepo/
├── .github/workflows/        # CI/CD
├── packages/
│   ├── game-client/          # Game UI
│   └── game-server/          # Game logic
│   └── game-shared/          # Game shared
├── assets/                   # Game assets
├── package.json              # Root workspace config
└── tsconfig.json             # Shared TypeScript config
```

<div v-click class="mt-4 text-sm opacity-70">
📦 3 main packages + shared configs<br/>
🚀 Deployment ready<br/>
🎯 Production-ready architecture
</div>

---
layout: center
---

# 🎯 The Challenge

<div v-click class="text-lg opacity-80 mb-6">
Keeping everything in sync while scaling the team
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-yellow:15 text-yellow1 border="~yellow:30">
    <div class="font-bold">Code Synchronization</div>

    - Shared packages across apps
    - Consistent API interfaces
    - Unified build processes
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Team Coordination</div>

    - Multiple developers
    - Different skill levels
    - Parallel development
  </div>
</div>


---
layout: center
---

# 😰 The Monorepo Pain Points

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Slow Builds</div>

    - Rebuilding everything on changes
    - No incremental builds
    - Long CI/CD pipelines
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-orange:15 text-orange1 border="~orange:30">
    <div class="font-bold text-orange-400">Complex Setup</div>

    - Multiple build tools
    - Inconsistent configs
    - Dependency hell
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-yellow:15 text-yellow1 border="~yellow:30" mt4>
  <div class="font-bold text-yellow-400">Development Friction</div>

  - Slow HMR across packages
  - Hard to debug shared code
  - Inconsistent dev experience
</div>

---
layout: center
---

# ⚡ Enter Vite

<div v-click class="text-lg opacity-80 mb-8">
The perfect tool for modern JavaScript monorepos
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Lightning Fast</div>

    - Native ESM in dev
    - Instant HMR
    - Optimized builds
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Monorepo Ready</div>
    
    - Workspace support
    - Shared dependencies
    - Unified configs
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30" mt4>
  <div class="font-bold">Framework Agnostic</div>
  - React, Vue, Svelte, vanilla JS
  - Same tooling across apps
  - Consistent DX
</div>

---
layout: cover
---

## 🛠️ Vite Workspace Configuration

<div class="text-lg opacity-80 mb-6">
Production-ready monorepo configuration
</div>
<v-clicks>
<div>

```json
// package.json (root)
{
  "name": "game-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev": "npm run dev --workspace=packages/game-client",
    "build": "npm run build --workspace=packages/game-client",
    "start": "npm run start --workspace=packages/game-server"
  }
}
```
</div>
<div>

```ts
// packages/game-client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true
      }
    }
  }
})
```

</div>
</v-clicks>

---
layout: cover
---

## ⚡ Dependency Optimization

<div v-click class="text-lg opacity-80 mb-6">
Pre-bundling shared dependencies for faster development
</div>

```ts
// vite.config.ts (continued)
export default defineConfig({
  optimizeDeps: {
    include: ['pixi.js', 'socket.io-client']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'pixi': ['pixi.js'],
          'game-engine': ['@game/engine']
        }
      }
    }
  }
})
```

---
layout: cover
---

## 📦 Package Configuration

<div v-click class="text-lg opacity-80 mb-6">
Library packages need different build settings
</div>

<div v-click>

```ts
// packages/game-engine/vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GameEngine',
      fileName: 'game-engine'
    },
    rollupOptions: {
      external: ['pixi.js'],
      output: {
        globals: {
          'pixi.js': 'PIXI'
        }
      }
    }
  }
})
```

</div>

---
layout: cover
---

## 🎮 App Configuration

<div v-click class="text-lg opacity-80 mb-6">
Applications use different plugins and settings
</div>

<div v-click>

```ts
// apps/game-client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@game-engine': resolve(__dirname, '../../packages/game-engine'),
      '@game-shared': resolve(__dirname, '../../packages/game-shared'),
    }
  },
  server: {
    port: 3000
  }
})
```

</div>


---
layout: cover
---

## 🚀 Development Workflow

<DevelopmentWorkflow/>

---
layout: cover
---

# 📚 Shared Dependencies

<div v-click class="text-lg opacity-80 mb-6">
One version of Pixi.js across all packages
</div>

```json
// package.json (root)
{
  "dependencies": {
    "pixi.js": "^8.0.0"
  }
}
```

```ts
// packages/pixi-utils/src/index.ts
import * as PIXI from 'pixi.js'

export function createGameContainer(): PIXI.Container {
  return new PIXI.Container()
}
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Single source of truth for dependencies<br/>
🔄 Easy updates across all apps<br/>
📦 Smaller bundle sizes
</div>

---
layout: cover
---

## ⚡ Build Optimization

<div v-click class="text-lg opacity-80">
Vite's intelligent dependency pre-bundling
</div>

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: [
      'pixi.js',
      'socket.io-client',
      '@game-engine',
      '@game-shared'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'pixi': ['pixi.js'],
          'game-engine': ['@game-engine'],
          'shared': ['@game-shared']
        }
      }
    }
  }
})
```

<div v-click class="mt-4 text-sm opacity-70">
🚀 Faster cold starts<br/>
📦 Optimized chunk splitting<br/>
🔄 Shared dependencies cached
</div>

---
layout: cover
---

# 👥 Team Collaboration

<div v-click class="text-lg opacity-80 mb-6">
Consistent development experience across the team
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">New Developer</div>
    - `npm install` at root
    - `npm run dev` starts everything
    - Same tooling as everyone
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Frontend Team</div>
    - Work on game-client
    - Share components via packages
    - Consistent build process
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30" mt4>
  <div class="font-bold">Backend Team</div>
  - Work on game-server
  - Share types with frontend
  - Same development workflow
</div>

---
layout: cover
---

# 🔄 Dependency Updates

<div v-click class="text-lg opacity-80 mb-6">
Updating Pixi.js across the entire monorepo
</div>

```bash
# Update Pixi.js in one place
npm update pixi.js

# Vite automatically:
# ✅ Updates all apps using Pixi.js
# ✅ Rebuilds affected packages
# ✅ Clears caches
# ✅ Restarts dev servers
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Single command updates everything<br/>
🔄 No manual dependency management<br/>
✅ Consistent versions across apps
</div>

---
layout: cover
---

## 🔧 Workspace Dependencies

<div v-click class="text-lg opacity-80 mb-6">
Managing internal package dependencies
</div>

```json
// packages/game-engine/package.json
{
  "name": "@game/engine",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "dependencies": {
    "pixi.js": "^8.0.0"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

```json
// apps/game-client/package.json
{
  "name": "game-client",
  "dependencies": {
    "@game/engine": "workspace:*",
    "@game/shared": "workspace:*",
    "react": "^18.0.0"
  }
}
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Workspace protocol for internal deps<br/>
🔄 Automatic version syncing<br/>
📦 No need to publish packages
</div>

---
layout: cover
---

## 🎮 ECS Implementation

<div v-click class="text-lg opacity-80 mb-6">
Entity Component System for modular game entities
</div>

<div v-click v-click-hide>

```ts
// packages/game-server/src/shared/entities/Obstacle.ts
import { Entity } from './Entity'
import { Positionable } from '../extensions'
import { EntityType } from '../entity-types'

export default class Obstacle extends Entity {
  constructor(x: number, y: number) {
    super()
    this.type = EntityType.OBSTACLE
    this.addExtension(new Positionable(this, x, y))
  }
}
```
</div>
<div v-click>

```ts
// packages/game-server/src/shared/extensions/Positionable.ts
export default class Positionable implements Extension {
  public static readonly Name = ExtensionNames.positionable
  
  private self: Entity
  private x: number
  private y: number
  
  constructor(self: Entity, x: number, y: number) {
    this.self = self
    this.x = x
    this.y = y
  }
  
  public update() {
    // Update position logic
  }
}
```

</div>

<div v-click class="mt-4 text-sm opacity-70">
🔧 Entity Component System<br/>
🎯 Modular game entities<br/>
⚡ Extensible architecture
</div>

---
layout: cover
---

## 🎨 Pixi.js Integration

<div v-click class="text-lg opacity-80 mb-6">
Consistent rendering across client and admin
</div>

```ts
// packages/pixi-utils/src/index.ts
import * as PIXI from 'pixi.js'

export function createGameContainer(): PIXI.Container {
  const container = new PIXI.Container()
  container.sortableChildren = true
  return container
}

export function createSprite(texture: PIXI.Texture): PIXI.Sprite {
  const sprite = new PIXI.Sprite(texture)
  sprite.anchor.set(0.5)
  return sprite
}

export function createText(text: string, style?: PIXI.TextStyle): PIXI.Text {
  return new PIXI.Text({
    text,
    style: style || {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xffffff
    }
  })
}
```

<div v-click class="mt-4 text-sm opacity-70">
🎨 Consistent visual components<br/>
🔄 Reusable across apps<br/>
📦 Single Pixi.js version
</div>

---
layout: cover
---

## 🔄 Shared Types & Interfaces

<div v-click class="text-lg opacity-80 mb-6">
Type-safe communication between client and server
</div>

<div v-click>

```ts
// packages/game-shared/src/types.ts
export interface Player {
  id: string
  name: string
  position: Vector2D
  score: number
  isOnline: boolean
}

export interface GameState {
  players: Player[]
  gameObjects: GameObject[]
  currentLevel: number
  isGameActive: boolean
}
```

</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Shared type definitions<br/>
🔒 Compile-time safety
</div>

---
layout: cover
---

## 📡 WebSocket Types

<div v-click class="text-lg opacity-80 mb-6">
Type-safe real-time communication
</div>

<div v-click>

```ts
// packages/socket-types/src/index.ts
export interface ServerToClientEvents {
  gameStateUpdate: (state: GameState) => void
  playerJoined: (player: Player) => void
  playerLeft: (playerId: string) => void
}

export interface ClientToServerEvents {
  joinGame: (playerName: string) => void
  movePlayer: (position: Vector2D) => void
  updateScore: (score: number) => void
}
```

</div>

<div v-click class="mt-4 text-sm opacity-70">
📡 WebSocket type safety<br/>
🔄 Real-time event handling
</div>

---
layout: cover
---

## 🚀 Build Performance Comparison

<div v-click class="text-lg opacity-80 mb-6">
Before vs After Vite implementation
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Before Vite</div>
    <div class="text-sm">
      • Cold start: 45s<br/>
      • HMR: 3-5s<br/>
      • Full build: 8min<br/>
      • Bundle size: 2.3MB
    </div>
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold text-green-400">With Vite</div>
    <div class="text-sm">
      • Cold start: 2s<br/>
      • HMR: <100ms<br/>
      • Full build: 2min<br/>
      • Bundle size: 1.1MB
    </div>
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
⚡ 22x faster cold start<br/>
🚀 30x faster HMR<br/>
📦 50% smaller bundles
</div>

---
layout: cover
---

## 🛠️ Development Scripts

<div v-click class="text-lg opacity-80 mb-6">
Streamlined development workflow
</div>

```json
// package.json (root) - Development
{
  "scripts": {
    "dev": "npm run dev --workspace=packages/game-client",
    "dev:server": "npm run dev --workspace=packages/game-server",
    "build": "npm run build --workspace=packages/game-client",
    "start": "npm run start --workspace=packages/game-server"
  }
}
```

```bash
# How to run the project
npm i
cp packages/game-client/.env.example packages/game-client/.env
npm run dev
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Simple workspace commands<br/>
🔄 Vite dev server + Node.js server<br/>
📦 Production-ready setup
</div>

---
layout: cover
---

## 📦 Build Scripts

<div v-click class="text-lg opacity-80 mb-6">
Unified build and test processes
</div>

```json
// package.json (root) - Build & Test
{
  "scripts": {
    "build": "npm run build:packages && npm run build:apps",
    "build:packages": "npm run build --workspaces --if-present",
    "build:apps": "npm run build --workspace=apps/game-client --workspace=apps/game-server --workspace=apps/game-admin",
    "test": "npm run test --workspaces --if-present",
    "lint": "npm run lint --workspaces --if-present"
  }
}
```

<div v-click class="mt-4 text-sm opacity-70">
📦 Unified build process<br/>
🧪 Workspace-wide testing
</div>

---
layout: cover
---

## 🔍 Debugging & DevTools

<div v-click class="text-lg opacity-80 mb-6">
Enhanced debugging experience
</div>

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    // Source maps for better debugging
    {
      name: 'source-map',
      configureServer(server) {
        server.middlewares.use('/debug', (req, res, next) => {
          // Custom debugging middleware
          console.log('Request:', req.url)
          next()
        })
      }
    }
  ],
  build: {
    sourcemap: true, // Always generate source maps
    minify: 'terser',
    terserOptions: {
      keep_fnames: true, // Keep function names for debugging
    }
  }
})
```

<div v-click class="mt-4 text-sm opacity-70">
🗺️ Source maps for all packages<br/>
🔍 Better stack traces<br/>
🛠️ Custom debugging tools
</div>

---
layout: cover
---

## 🧪 Testing Strategy

<div v-click class="text-lg opacity-80 mb-6">
Comprehensive testing across the monorepo
</div>

```ts
// packages/game-engine/src/__tests__/physics.test.ts
import { describe, it, expect } from 'vitest'
import { Physics } from '../physics'
import type { GameObject } from '../types'

describe('Physics', () => {
  it('should update object positions', () => {
    const physics = new Physics()
    const obj: GameObject = {
      id: '1',
      position: { x: 0, y: 0 },
      velocity: { x: 10, y: 5 }
    }
    
    physics.addObject(obj)
    physics.update(0.1) // 100ms
    
    expect(obj.position.x).toBe(1)
    expect(obj.position.y).toBe(0.5)
  })
})
```

<div v-click class="mt-4 text-sm opacity-70">
🧪 Unit tests for shared packages<br/>
🎯 Type-safe testing
</div>

---
layout: cover
---

## 🎭 Component Testing

<div v-click class="text-lg opacity-80 mb-6">
Testing React components in apps
</div>

```ts
// apps/game-client/src/__tests__/GameComponent.test.tsx
import { render, screen } from '@testing-library/react'
import { GameComponent } from '../GameComponent'

describe('GameComponent', () => {
  it('should render game canvas', () => {
    render(<GameComponent />)
    expect(screen.getByTestId('game-canvas')).toBeInTheDocument()
  })
})
```

<div v-click class="mt-4 text-sm opacity-70">
🎭 Component tests for apps<br/>
🔄 Shared test utilities
</div>

---
layout: cover
---

## 🚨 Common Issues & Solutions

<div v-click class="text-lg opacity-80 mb-6">
Troubleshooting monorepo challenges
</div>

<div v-click grid="~ cols-1 gap-4" py4>
  <div flex="~ col gap-2" p4 rounded-xl bg-yellow:15 text-yellow1 border="~yellow:30">
    <div class="font-bold">❌ Circular Dependencies</div>
    <div class="text-sm">Solution: Use dependency injection or event system</div>
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-orange:15 text-orange1 border="~orange:30">
    <div class="font-bold">❌ Build Order Issues</div>
    <div class="text-sm">Solution: Configure proper build dependencies in package.json</div>
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold">❌ HMR Not Working</div>
    <div class="text-sm">Solution: Check file watchers and ensure proper alias configuration</div>
  </div>
</div>

---
layout: cover
---

## 📊 Bundle Analysis

<div v-click class="text-lg opacity-80 mb-6">
Understanding your bundle composition
</div>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    react(),
    analyzer({
      analyzerMode: 'server',
      openAnalyzer: true,
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'pixi': ['pixi.js'],
          'game-engine': ['@game/engine'],
          'shared': ['@game/shared']
        }
      }
    }
  }
})
```

<div v-click class="mt-4 text-sm opacity-70">
📊 Visual bundle analysis<br/>
🎯 Optimize chunk splitting<br/>
📦 Identify large dependencies
</div>

---
layout: cover
---

## 🚀 Docker Deployment

<div v-click class="text-lg opacity-80 mb-6">
Production deployment setup
</div>

```yaml
# docker-compose.yml
version: '3.8'
services:
  game-client:
    build: ./packages/game-client
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  
  game-server:
    build: ./packages/game-server
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
  
  caddy:
    image: caddy:2
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
```

```bash
# Deploy to any VPS
docker-compose up -d --build
```

<div v-click class="mt-4 text-sm opacity-70">
🐳 Docker containerization<br/>
🌐 Caddy reverse proxy<br/>
🚀 One-command deployment
</div>

---
layout: cover
---

## 🎮 Game Features

<div v-click class="text-lg opacity-80 mb-6">
What makes this a great monorepo example
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Game Features</div>
    - Multiplayer survival gameplay
    - Randomly generated worlds
    - Crafting & base building
    - Real-time WebSocket communication
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Technical Features</div>
    - Entity Component System (ECS)
    - TypeScript throughout
    - Docker deployment
    - GitHub Actions CI/CD
  </div>
</div>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Production-ready architecture<br/>
📦 Scalable monorepo structure<br/>
🚀 Modern development workflow
</div>

---
layout: cover
---

# 🎯 Real-World Benefits

<div v-click class="text-lg opacity-80 mb-6">
What we achieved with our game monorepo
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Development Speed</div>
    - 3x faster builds
    - Instant HMR across packages
    - Single command setup
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Team Productivity</div>
    - Consistent tooling
    - Easy onboarding
    - Shared code reuse
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30" mt4>
  <div class="font-bold">Maintenance</div>
  - Single dependency updates
  - Unified configuration
  - Easier debugging
</div>

---
layout: cover
---

# 🚀 Getting Started

<div v-click class="text-lg opacity-80 mb-6">
Quick setup for your monorepo
</div>

```bash
# 1. Create workspace
npm init -w packages/game-engine
npm init -w apps/game-client

# 2. Install Vite
npm install -D vite

# 3. Configure workspace
# Add to package.json:
{
  "workspaces": ["packages/*", "apps/*"]
}
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Start with one shared package<br/>
🔄 Add more as you grow<br/>
📦 Use workspace dependencies
</div>

---
layout: cover
---

# 💡 Best Practices

<div v-click class="text-lg opacity-80 mb-6">
Tips for successful Vite monorepos
</div>

<div v-click grid="~ cols-1 gap-4" py4>
  <div flex="~ col gap-2" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">🎯 Start Simple</div>
    Begin with 2-3 packages, add complexity gradually
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">📦 Shared Dependencies</div>
    Keep common deps at root level
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30">
    <div class="font-bold">🔧 Unified Config</div>
    Share Vite configs across packages
  </div>
</div>

---
layout: cover
---

## 🎯 Migration Strategy

<div v-click class="text-lg opacity-80 mb-6">
Moving from separate repos to monorepo
</div>

<div v-click grid="~ cols-1 gap-4" py4>
  <div flex="~ col gap-2" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Phase 1: Setup</div>
    <div class="text-sm">Create workspace structure and move packages</div>
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Phase 2: Configuration</div>
    <div class="text-sm">Configure Vite, aliases, and build scripts</div>
  </div>

  <div v-click flex="~ col gap-2" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30">
    <div class="font-bold">Phase 3: Optimization</div>
    <div class="text-sm">Optimize builds, add testing, and CI/CD</div>
  </div>
</div>

---
layout: cover
---

## 📈 Scaling Considerations

<div v-click class="text-lg opacity-80 mb-6">
Planning for team growth and complexity
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Team Size</div>
    <div class="text-sm">
      • 2-5 developers: Simple structure<br/>
      • 5-15 developers: Add tooling<br/>
      • 15+ developers: Advanced workflows
    </div>
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Package Count</div>
    <div class="text-sm">
      • <10 packages: Manual management<br/>
      • 10-50 packages: Automation tools<br/>
      • 50+ packages: Advanced tooling
    </div>
  </div>
</div>

<div v-click flex="~ col gap-4" p4 rounded-xl bg-purple:15 text-purple1 border="~purple:30" mt4>
  <div class="font-bold">Performance</div>
  <div class="text-sm">Monitor build times, bundle sizes, and HMR performance as you scale</div>
</div>

---
layout: cover
---

## 🛡️ Security & Access Control

<div v-click class="text-lg opacity-80 mb-6">
Managing permissions and sensitive code
</div>

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    // Environment-based access control
    {
      name: 'access-control',
      configureServer(server) {
        server.middlewares.use('/admin', (req, res, next) => {
          const token = req.headers.authorization
          if (!isValidToken(token)) {
            res.statusCode = 403
            res.end('Access denied')
            return
          }
          next()
        })
      }
    }
  ],
  define: {
    // Environment variables
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __API_URL__: JSON.stringify(process.env.VITE_API_URL)
  }
})
```

<div v-click class="mt-4 text-sm opacity-70">
🔒 Environment-based access<br/>
🛡️ Secure API endpoints<br/>
🔐 Token-based authentication
</div>

---
layout: cover
---

## 📱 Multi-Platform Support

<div v-click class="text-lg opacity-80 mb-6">
Extending to mobile and desktop platforms
</div>

```ts
// packages/game-shared/src/platforms.ts
export type Platform = 'web' | 'mobile' | 'desktop'

export interface PlatformConfig {
  platform: Platform
  features: {
    touch: boolean
    keyboard: boolean
    mouse: boolean
    gamepad: boolean
  }
}

export function getPlatformConfig(): PlatformConfig {
  if (typeof window === 'undefined') {
    return { platform: 'desktop', features: { touch: false, keyboard: true, mouse: true, gamepad: false } }
  }
  
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  return {
    platform: isMobile ? 'mobile' : 'web',
    features: {
      touch: isMobile,
      keyboard: !isMobile,
      mouse: !isMobile,
      gamepad: false
    }
  }
}
```

<div v-click class="mt-4 text-sm opacity-70">
📱 Cross-platform compatibility<br/>
🎮 Adaptive input handling<br/>
🔄 Shared platform logic
</div>

---
layout: cover
---

# 🎮 The Game is On!

<div v-click class="text-lg opacity-80 mb-8">
Vite makes JavaScript monorepos a joy to work with
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold">Before Vite</div>
    - Slow builds
    - Complex setup
    - Inconsistent tooling
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">With Vite</div>
    - Lightning fast
    - Simple configuration
    - Unified experience
  </div>
</div>

---
layout: intro
class: pb-5 text-center
growX: 50
growY: 120
---

# Thank You!

<div mt5>
<img src="/ema-zyka-2022-b.jpg" rounded-full inline w-30 />
<h5 opacity-60>@emazyka</h5>
<div>Slides on <a href="https://github.com/emazyka/talks/tree/main/2025-09-27-why-vite-loves-javascript-monorepos" target="_blank">Github</a></div>
</div>
