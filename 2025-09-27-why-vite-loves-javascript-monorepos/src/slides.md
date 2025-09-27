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
title: Why Vite ♥ Javascript Monorepos
addons:
  - slidev-addon-graph
---



<div abs-tl mx-18 my-16 text-xs flex="~ col items-center" text-left>
  <h1>
    <img src="/vite-logo.svg" w30  />
    <span>Why Vite ♥ <br/>Javascript Monorepos</span>
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
  <div flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Polyrepo Pain</div>

    - Change in library A
    - Update all dependent repos manually
    - Run NPM install everywhere
    - Fall behind on updates
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold text-green-400">Monorepo Solution</div>

    - Single PR touches multiple packages
    - No follow-up steps needed
    - Run entire test suite easily
    - Keep everything in sync
  </div>
</div>

---
layout: center
---

# 🤔 When to Choose Monorepo?

<div v-click class="text-lg opacity-80 mb-6">
Key indicators for your decision
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold text-green-400">Choose Monorepo When:</div>

    - High package linkage
    - Sophisticated shared tooling
    - Pain keeping teams upgraded
    - Need unified conventions
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-red:15 text-red1 border="~red:30">
    <div class="font-bold text-red-400">Stick with Polyrepo When:</div>

    - Self-contained libraries
    - Simple CLI tools
    - Setup overhead not worth it
    - Independent projects
  </div>
</div>

---
layout: center
---

# 😰 The Monorepo Pain Points

<div v-click class="text-lg opacity-80 mb-6">
Common challenges that slow down development
</div>

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

# ⚡ Vite

<div v-click class="text-lg opacity-80 mb-8">
Great tool for modern Javascript monorepos
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
layout: center
---

# 🏗️ Monorepo Structure

```md
game-monorepo/
├── packages/
│   ├── game-client/          # React + Pixi.js UI
│   ├── game-server/          # Node.js + Socket.io
│   └── game-shared/          # Types & utilities
├── package.json              # Root workspace config
└── tsconfig.json             # Shared TypeScript config
```

<div v-click class="mt-4 text-sm opacity-70">
📦 3 main packages + shared configs<br/>
🚀 Simple but production-ready<br/>
🎯 Easy to understand and maintain
</div>


---
layout: cover
---

## 🛠️ Vite Configuration

<div class="text-lg opacity-80 mb-6">
Simple workspace setup with shared dependencies
</div>

<v-clicks>
<div>

```json
// package.json (root)
{
  "workspaces": ["packages/*"],
  "scripts": {
    "dev": "npm run dev --workspace=packages/game-client",
    "build": "npm run build --workspace=packages/game-client"
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
  optimizeDeps: {
    include: ['pixi.js', 'socket.io-client']
  },
  resolve: {
    alias: {
      '@game-shared': resolve(__dirname, '../game-shared')
    }
  }
})
```

</div>
</v-clicks>

---
layout: cover
---

## 📚 Shared Dependencies & Optimization

<div v-click class="text-lg opacity-80 mb-6">
One version across all packages with intelligent bundling
</div>

<v-clicks>
<div>

```json
// package.json (root)
{
  "dependencies": {
    "pixi.js": "^8.0.0"
  }
}
```
</div>
<div>

```ts
// packages/game-shared/src/index.ts
import * as PIXI from 'pixi.js'

export function createGameContainer(): PIXI.Container {
  return new PIXI.Container()
}

export interface Player {
  id: string
  position: { x: number, y: number }
}
```
</div>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Single source of truth for dependencies<br/>
🚀 Vite pre-bundles shared packages<br/>
📦 Optimized chunk splitting
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

## 🎮 Shared Architecture

<div v-click class="text-lg opacity-80 mb-6">
ECS system and abstractions shared across packages
</div>

<v-clicks>
<div>

```ts
// packages/game-shared/src/types.ts
export interface Player {
  id: string
  position: { x: number, y: number }
  score: number
}

export interface GameState {
  players: Player[]
  currentLevel: number
}
```
</div>
<div>

```ts
// packages/game-shared/src/pixi-utils.ts
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
```
</div>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-70">
🎯 Type-safe communication<br/>
🎨 Consistent visual components<br/>
🔧 Modular ECS architecture
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

    - Pure functions: same input/output
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
layout: cover
---

## 🛠️ Development Workflow

<div v-click class="text-lg opacity-80 mb-6">
Simple commands for the entire monorepo
</div>

```json
// package.json (root)
{
  "scripts": {
    "dev": "npm run dev --workspace=packages/game-client",
    "dev:server": "npm run dev --workspace=packages/game-server",
    "build": "npm run build --workspaces --if-present",
    "test": "npm run test --workspaces --if-present"
  }
}
```

```bash
# How to run the project
npm i
npm run dev
```

<div v-click class="mt-4 text-sm opacity-70">
🎯 Simple workspace commands<br/>
🔄 Vite dev server + Node.js server<br/>
📦 Unified build and test processes
</div>


---
layout: cover
---

# 👥 Team Collaboration & Updates

<div v-click class="text-lg opacity-80 mb-6">
Consistent experience and easy dependency management
</div>

<div v-click grid="~ cols-2 gap-4" py4>
  <div flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">
    <div class="font-bold">Team Benefits</div>

    - Install at root
    - Root scripts start everything
    - Share components via packages
    - Same tooling for everyone
  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-blue:15 text-blue1 border="~blue:30">
    <div class="font-bold">Easy Updates</div>

    - Updates all apps automatically
    - Rebuilds affected packages
    - Consistent versions everywhere
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
