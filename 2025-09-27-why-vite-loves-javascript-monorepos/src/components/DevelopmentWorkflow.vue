<template>
  <div class="development-workflow">
    <div class="workflow-container">
      <!-- Code Change -->
      <div class="step step-1" :class="{ active: currentStep >= 1 }">
        <div class="step-icon">💻</div>
        <div class="step-content">
          <div class="step-title">Code Change</div>
          <div class="step-description">Edit shared package</div>
          <div class="code-block">
            <pre><code>// packages/game-engine/src/Physics.ts
export class Physics {
  update(deltaTime: number) {
    // Change this method...
    return this.calculateCollisions(deltaTime)
  }
}</code></pre>
          </div>
        </div>
      </div>

      <!-- Vite HMR -->
      <div class="step step-2" :class="{ active: currentStep >= 2 }">
        <div class="step-icon">⚡</div>
        <div class="step-content">
          <div class="step-title">Vite HMR</div>
          <div class="step-description">Instant hot reload</div>
          <div class="hmr-indicator">
            <div class="hmr-dot"></div>
            <span>Hot Module Replacement</span>
          </div>
        </div>
      </div>

      <!-- Apps Update -->
      <div class="step step-3" :class="{ active: currentStep >= 3 }">
        <div class="step-icon">🔄</div>
        <div class="step-content">
          <div class="step-title">Apps Update</div>
          <div class="step-description">All dependent apps refresh</div>
          <div class="apps-grid">
            <div class="app-item">✅ Game Client</div>
            <div class="app-item">✅ Game Server</div>
            <div class="app-item">✅ Admin Dashboard</div>
          </div>
        </div>
      </div>

      <!-- Result -->
      <div class="step step-4" :class="{ active: currentStep >= 4 }">
        <div class="step-icon">🎯</div>
        <div class="step-content">
          <div class="step-title">Result</div>
          <div class="step-description">Everything stays in sync</div>
          <div class="result-indicator">
            <div class="success-icon">✨</div>
            <span>All apps updated instantly</span>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <div class="arrows">
        <div class="arrow arrow-1" :class="{ active: currentStep >= 2 }"></div>
        <div class="arrow arrow-2" :class="{ active: currentStep >= 3 }"></div>
        <div class="arrow arrow-3" :class="{ active: currentStep >= 4 }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentStep = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    currentStep.value++
    if (currentStep.value >= 4) {
      clearInterval(interval)
      // Restart animation after a delay
      setTimeout(() => {
        currentStep.value = 0
        onMounted()
      }, 3000)
    }
  }, 1500)
})
</script>

<style scoped>
.development-workflow {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.workflow-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
}

.step {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  opacity: 0.8;
  transition: all 0.5s ease;
  transform: translateX(-20px);
}

.step.active {
  opacity: 1;
  transform: translateX(0);
}

.step-icon {
  font-size: 2rem;
  margin-right: 1.5rem;
  min-width: 3rem;
  text-align: center;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #eee;
}

.step-description {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1rem;
}

.code-block {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  overflow-x: auto;
}

.hmr-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 8px;
  font-weight: 500;
}

.hmr-dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.app-item {
  padding: 0.5rem;
  background: #f1f5f9;
  border-radius: 6px;
  font-size: 0.8rem;
  text-align: center;
  color: #475569;
}

.result-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-radius: 8px;
  font-weight: 500;
}

.success-icon {
  font-size: 1.2rem;
}

.arrows {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.arrow {
  position: absolute;
  width: 2px;
  height: 40px;
  background: #cbd5e1;
  left: 1.5rem;
  transition: all 0.5s ease;
  opacity: 0;
}

.arrow.active {
  opacity: 1;
  background: #3b82f6;
}

.arrow-1 {
  top: 20%;
}

.arrow-2 {
  top: 45%;
}

.arrow-3 {
  top: 70%;
}

.arrow::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: -4px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #cbd5e1;
  transition: all 0.5s ease;
}

.arrow.active::after {
  border-top-color: #3b82f6;
}
</style>
