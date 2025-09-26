<template>
  <div class="game-monorepo-diagram">
    <div class="diagram-container">
      <!-- Root Level -->
      <div class="root-level">
        <div class="root-box">
          <div class="box-title">game-monorepo</div>
          <div class="box-subtitle">Root workspace</div>
        </div>
      </div>

      <!-- Packages Level -->
      <div class="packages-level">
        <div class="level-label">packages/</div>
        <div class="packages-grid">
          <div class="package-box game-client">
            <div class="box-title">game-client</div>
            <div class="box-subtitle">React + Vite frontend</div>
          </div>
          <div class="package-box game-server">
            <div class="box-title">game-server</div>
            <div class="box-subtitle">Node.js + ECS</div>
          </div>
        </div>
      </div>

      <!-- Additional Files -->
      <div class="files-level">
        <div class="level-label">Additional Files</div>
        <div class="files-grid">
          <div class="file-box assets">
            <div class="box-title">assets/</div>
            <div class="box-subtitle">Game assets</div>
          </div>
          <div class="file-box docker">
            <div class="box-title">docker-compose.yml</div>
            <div class="box-subtitle">Deployment</div>
          </div>
          <div class="file-box workflows">
            <div class="box-title">.github/workflows/</div>
            <div class="box-subtitle">CI/CD</div>
          </div>
        </div>
      </div>

      <!-- Dependencies Arrows -->
      <div class="dependencies">
        <div class="arrow arrow-1" v-if="showArrows">
          <div class="arrow-line"></div>
          <div class="arrow-head"></div>
        </div>
        <div class="arrow arrow-2" v-if="showArrows">
          <div class="arrow-line"></div>
          <div class="arrow-head"></div>
        </div>
        <div class="arrow arrow-3" v-if="showArrows">
          <div class="arrow-line"></div>
          <div class="arrow-head"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showArrows = ref(false)

onMounted(() => {
  setTimeout(() => {
    showArrows.value = true
  }, 1000)
})
</script>

<style scoped>
.game-monorepo-diagram {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.diagram-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
}

.root-level {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.root-box {
  background: linear-gradient(135deg, #646cff 0%, #747bff 100%);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(100, 108, 255, 0.3);
  text-align: center;
  min-width: 200px;
}

.packages-level, .files-level {
  margin-bottom: 2rem;
}

.level-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 1rem;
  text-align: center;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.files-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.package-box, .file-box {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.package-box:hover, .file-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.game-client {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.game-server {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  color: white;
}

.assets {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
}

.docker {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

.workflows {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.box-title {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.box-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.dependencies {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.arrow {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.arrow-1 {
  top: 25%;
  left: 20%;
  transform: rotate(45deg);
}

.arrow-2 {
  top: 25%;
  right: 20%;
  transform: rotate(-45deg);
}

.arrow-3 {
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
}

.arrow-line {
  width: 60px;
  height: 2px;
  background: #64748b;
  position: relative;
}

.arrow-head {
  position: absolute;
  right: -6px;
  top: -4px;
  width: 0;
  height: 0;
  border-left: 8px solid #64748b;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.arrow.show {
  opacity: 1;
}
</style>
