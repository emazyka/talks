---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
lang: en
glowSeed: 4
title: Fast and Modern Testing with Vitest 🚀
addons:
  - slidev-addon-graph
---


![](/vitest-logo-shadow.svg){.w-30.mt--10.mb-5}

# Fast and Modern Testing with Vitest 🚀

<div text-xl mt-4>A practical journey to faster, smarter, and modern testing</div>

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

# Ema Zyka

<div class="leading-10 opacity-80 s">
<div flex="~ gap-3" items-center>
    <div>Staff Software Engineer</div>
</div>

<div flex="~ gap-2" items-center>
    <div>Co-organizer @ Vue.js Athens meetup</div>
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
layout: intro
class: company-logo-top-right text-2xl
---

Allwyn Lottery Solutions{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>Innovating in<br/>Lottery and Gaming</h2>

<div mt-10 />

<v-clicks>
Commited to responsible gaming

Engaging experiences for players

Forefront of technological advancements
</v-clicks>


---
layout: center
---

# 🙋 Heard about <span text-hex-646cff font-bold><span v-mark="0">Vite</span></span>?


<FeatureFlexiblePlugins/>


---
layout: center
---

<img src="/vite-logo.svg" w10/>
<v-clicks>

- [Vite](https://vitejs.dev/)'s config, transformers, resolvers, and plugins.

- Use the same setup from your app
- ESM first, top level await
- Out-of-box TypeScript / JSX support
- [Smart & instant watch mode](#watch-mode), like HMR for tests!
- Jest compatible: Expect, Snapshot, Mocking, Spy, etc.
- [Native code coverage](#coverage) via [c8](https://github.com/bcoe/c8)
- [JSDOM](https://github.com/jsdom/jsdom) and [happy-dom](https://github.com/capricorn86/happy-dom) for DOM and browser API mocking
- Components testing (Vue, React, Svelte, Lit, etc.)

</v-clicks>

---
layout: center
---

# 🙋 Heard about <span text-hex-add467 font-bold><span v-mark="0">Vitest</span></span>? <img src="/vitest-logo-shadow.svg" w10 inline />

<FeatureOptimizedBuild/>

---
layout: cover
zoom: 1.5
---

# Why Vitest?
<!-- 
* Built **with Vite in mind**, sharing the same config, transformers, resolvers & plugins
* Avoids duplicate pipelines (build, dev, test) like older solutions
* Jest-compatible, so migration is painless
* Focused on developer experience: fast, modern, low overhead
 -->



---
layout: cover
---

# <img src="/vitest-logo-shadow.svg" w20 inline /> Core Features

<div grid="~ cols-2 gap-8 items-center">
  <div>
    <ul>
      <li>⚡ Instant **watch mode** powered by Vite’s module graph</li>
      <li>🌐 **ESM-first**: support for TypeScript, JSX, top‑level await</li>
      <li>🧵 **Multi‑threading**: via Tinypool (child_process/worker_threads)</li>
      <li>🛠️ Rich:
        <ul>
          <li>Jest‑compatible snapshots</li>
          <li>Built‑in mocks (Tinyspy + `vi.fn`)</li>
          <li>In‑source tests (Rust‑style)</li>
          <li>Concurrent tests via `.concurrent`</li>
          <li>Benchmarking & type‑checks (bench, expect‑type)</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

---
layout: cover
zoom: 1.3
---

# Unified Configuration

* Vitest reads your **vite.config.ts**, sharing build/dev settings
* Or use `vitest.config.ts` to override test-specific options
* Extend own configs: `mergeConfig(...)`

---
layout: cover
zoom: 1.3
---

# In‑Source Testing

```ts
export function add(...) { ... }

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('works', () => expect(add(1,2)).toBe(3))
}
```

* Tests live alongside code, get private-state access
* Ideal for prototyping and small utilities

---
layout: cover
zoom: 1.3
---

# Watch Mode & Smart Re‑runs

```bash
npx vitest --watch
```

* Runs tests in HAMR-like hot fashion, re-running only related tests
* Default in dev; detects CI to switch to “run” mode

---
layout: cover
zoom: 1.3
---

# Parallel & Concurrent Testing

```ts
it.concurrent('a', async () => {...})
describe.concurrent('suite', () => {...})
```

* Launch tests in parallel threads by default
* Leverage `.concurrent` for simultaneous execution within suites

---
layout: cover
zoom: 1.3
---

# Mocking & Time Control

```ts
vi.useFakeTimers()
vi.setSystemTime(new Date(2000,1,1,13))
```

* Built-in DOM mocks: happy‑dom/jsdom
* `vi.fn`, `vi.spyOn`, `vi.mock` for jest-like mocks
* Full control over clocks and timers

---
layout: cover
zoom: 1.5
---

# Snapshot Testing

```ts
expect(result).toMatchSnapshot()
```

* Jest-compatible snapshots
* Auto handling & integration with watch mode

---
layout: cover
zoom: 1.5
---

# Vitest UI

Interactive browser-based UI:

```bash
npm i -D @vitest/ui
vitest --ui
```

* Visualize test suites, assertions, coverage snapshots
* Also available as HTML reporter

---
layout: cover
zoom: 1.5
---

# Coverage & Reporting

```bash
vitest run --coverage
```

* Supports V8-native and Istanbul instrumentation
* Outputs text & HTML; integrates into CI workflows
* Configurable report folder & ignore rules

---
layout: cover
zoom: 1.4
---

# Test Context & Fixtures

```ts
it('uses fixtures', ({ expect, task }) => { ... })
```

* Inspired by Playwright
* Use `test.extend()` to define fixtures (e.g., DB setup)
* Access `expect`, `task`, `signal`, hooks within contexts

---
layout: cover
---

# Migration from Jest

* Drop Babel/ts-jest—less config
* Same API surface: `describe`, `it`, `vi.mock`, `expect`
* Use shared config; drop duplicate pipelines

---
layout: cover
---

# Best Practices

* Use `.only`, `.skip`, `.todo`, `.concurrent`
* Prefer real code paths over fakes; mock responsibly
* Use in-source tests for small utilities
* Mind snapshot overuse; maintain coverage hygiene

---
layout: cover
---

# Summary

* Vitest is **fast**, **modern**, and built for Vite
* Rich DX: watch mode, UI, fixtures, coverage
* Easy migration from Jest—low friction
* Try Vitest in your project today!

---
layout: cover
---

# Further Resources

* \[Guide & API] vitest.dev
* \[Features] vitest.dev/guide/features.html
* \[Why Vitest] vitest.dev/guide/why.html
* Starter: **github.com/ema-zyka/vitest-starter**

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!
<img src="/logo-w.png" w55 inline-block />

<div mt5>
<h5 opacity-60>@emazyka</h5>
<div>Slides on <a href="https://github.com/emazyka" target="_blank">Github</a></div>
</div>
