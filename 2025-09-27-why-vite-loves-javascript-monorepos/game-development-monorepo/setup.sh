#!/bin/bash

echo "🐦 Setting up Bird Jump Game Monorepo..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "💡 Try running: nvm use 20"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if pnpm is installed, if not use npm
if command -v pnpm &> /dev/null; then
    echo "✅ Using pnpm for package management"
    PACKAGE_MANAGER="pnpm"
else
    echo "⚠️  pnpm not found, using npm (workspace support may be limited)"
    PACKAGE_MANAGER="npm"
fi

# Install dependencies
echo "📦 Installing dependencies..."
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    pnpm install
else
    npm install
fi

# Build shared package first
echo "🔨 Building shared package..."
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    pnpm --filter @bird-jump/game-shared build
else
    npm run build --workspace=packages/game-shared
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the game:"
echo "  1. Start the server: npm run dev:server"
echo "  2. Start the client: npm run dev"
echo "  3. Open http://localhost:3000"
echo ""
echo "Game controls:"
echo "  - SPACE or Click to jump"
echo "  - Avoid the fireballs!"
echo ""
