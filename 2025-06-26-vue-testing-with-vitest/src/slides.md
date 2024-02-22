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
title: Fast and Modern Testing with Vitest 🚀
addons:
  - slidev-addon-graph
---



<div abs-tl mx-18 my-16 text-xs flex="~ col items-center" text-left>
  <h1>
    <img src="/vitest-logo-shadow.svg" w30  />
    <span>Fast and Modern <br/>Testing with Vitest 🚀</span>
  </h1>
</div>

<div abs-br mx-18 my-11 text-xs flex="~ col items-center" text-left>
  <img src="/mot.png" w22 mb3/>
  <span text-xs>Ministry Of Testing</span>
  <div text-xs opacity-75>June 26th 2025</div>
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
    <div>Staff Software Engineer / <img src="/logo-w.png" inline w25></div>
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

# 🙋 Heard about <span text-hex-646cff font-bold><span v-mark="0">Vite</span></span>?


<FeatureFlexiblePlugins/>


---
layout: center
---

<img src="/vite-logo.svg" w10/>

<div grid="~ cols-2 gap-2" py4>
  <div v-click flex="~ col gap-4" p4 rounded-xl bg-green:15 text-green1 border="~green:30">

    - Fast dev server + HMR
    - Native ESM support
    - TS, JSX, and CSS out of the box
    - Built-in support for Vue, React, etc.
    - Rollup pre-configured for builds

  </div>

  <div v-click flex="~ col gap-4" p4 rounded-xl bg-teal:15 text-teal1 border="~teal:30">

    - Production-ready bundling
    - Multi-page & library mode
    - Optimized static assets
    - One config for dev, build, SSR
    - Rollup-style plugin system

  </div>
</div>


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

<v-switch>
  <template #0>
    - <span>Test runner of choice <img src="/vite-logo.svg" w6 inline /></span><br/>
      - Dev-first experience<br/>
      - Lightweight and fast<br/>
      - Performance-centric by design<br/>
      - Worker thread-based parallel processing<br/>
  </template>
  <template #1>

      - Watch mode
      - Async lifecycle hooks
      - No bundling — native ESM and on-demand serving  
      - `jsdom` and `happy-dom` support
      - Component testing: Vue, React, Svelte, Lit, etc.  
      
  </template>
</v-switch>

---
layout: cover
zoom: 1.3
---

# Unified Configuration

* Vitest reads your `vitest.config.ts`, sharing build/dev settings
* Or use `vitest.config.ts` to override test-specific options
* Extend own configs: `mergeConfig(...)`


---
layout: cover
zoom: 1.4
---

<v-switch>
  <template #0>

  ```md
my-app/
├── src/
│   ├── utils/
│   │   └── hello.ts
│   └── main.ts
├── tests/
│   └── hello.test.ts
├── vite.config.ts
└── ...
  ```

  </template>

  <template #1>

  ```ts
  // vite.config.ts

  import { defineConfig } from 'vitest/config'; // <-- note: uses vitest/config!
  import path from 'path';

  export default defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    test: {
      environment: 'node', // or 'jsdom' if testing browser code
    },
  });
  ```

</template>
  <template #2>
  
  ```ts
  // 🔨 src/utils/hello.ts

  export function sayHello(name: string) {
    return `Hello, ${name}!`;
  }
  ```

</template>
  <template #3>
  
  ```ts
  // 🧪 tests/hello.test.ts

  import { describe, it, expect } from 'vitest';
  import { sayHello } from '@/utils/hello'; // ← alias works!

  describe('sayHello', () => {
    it('greets correctly', () => {
      expect(sayHello('Vite')).toBe('Hello, Vite!');
    });
  });

  ```

</template>
</v-switch>


---
layout: cover
zoom: 1.4
---

```ts
// 🎯 override test-specific options

import { defineConfig } from 'vitest/config';
import baseConfig from './vite.config';

export default defineConfig({
  ...baseConfig,
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

```


---
layout: cover
zoom: 1.4
---

```ts
// 🧱 extend your own configs

import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './vite.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./test/setup.ts'],
    },
  })
);


```

---
layout: cover
zoom: 1.3
---

# In‑Source Testing

Vitest provides a way to run tests within your source code along side the implementation, similar to <span text-hex-D34516 font-bold>[Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest)</span>

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

```ts
// tests/math.test.ts
import { multiply } from '../utils/math';

it('multiplies correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});
```

While changing `multiply()` in `math.ts`

✅ Re-runs just math.test.ts

🚫 Doesn't re-run unrelated tests

👮 Safeguards CI by automatically switching to `run once` mode



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

* Built-in DOM mocks: `happy-dom` or `jsdom`
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
layout: intro
---

<img src="/ui-1-light.png" />

---
layout: cover
zoom: 1.5
---

# Coverage & Reporting

```bash
vitest run --coverage
```

* Supports `v8` and `istanbul` instrumentation
* Outputs text & HTML - integrates into CI workflows
* Configurable report folder & ignore rules

---
layout: cover
zoom: 1.5
---

```ts

// 📋 vitest.config.ts

export default {
  test: {
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['src/generated/', 'src/types/'],
      reportsDirectory: './coverage',
    },
  },
};


```

---
layout: cover
zoom: 1.4
---

# Test Context & Fixtures

```ts
it('uses fixtures', ({ expect, task }) => { ... })
```

* Inspired by **Playwright**
* `test.extend()` to define fixtures (e.g., DB setup)
* `expect`, `task`, `signal`, hooks within contexts

---
layout: cover
zoom: 1.4
---

<v-switch>

<template #0>

```ts
const dbConfig = { 
  connectionString: 'postgres://testuser:testpass@localhost/testdb'
};

async function createTestDatabase() {

  const db = new Client(dbConfig);
  await db.connect();
  await db.query('BEGIN');

  return {
    query: (...args) => db.query(...args),
    close: () => db.end(),
  };
}

```

</template>


<template #1>

```ts

const test = vitest.extend({
  db: async ({}, use) => {
    const db = await createTestDatabase();
    await use(db);
    await db.close();
  }
});

test('reads from database', async ({ db, expect }) => {
  const users = await db.getUsers();
  expect(users.length).toBeGreaterThan(0);
});


```


✅ Each test automatically gets a fresh DB object

🔁 Setup and cleanup happen automatically per test
</template>
</v-switch>
---
layout: cover
---

# From Jest to Vitest

* 😉 No need for `Babel` or `ts-jest`
* ✍️ Same API surface: `describe`, `it`, `expect`, `vi.mock`
* 🧩 Unified config across dev, build, and test
* 🚀 Faster runs — no bundling overhead


---
layout: cover
---

# Summary

* Vitest is **fast**, **modern**, and built for Vite
* Rich DX: watch mode, UI, fixtures, coverage
* Easy migration from Jest - low friction

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
<div>Slides on <a href="https://github.com/emazyka/talks/tree/main/2025-06-26-vue-testing-with-vitest" target="_blank">Github</a></div>
</div>
