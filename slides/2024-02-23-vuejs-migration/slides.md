---
layout: intro
title: Beyond the Sunset
titleTemplate: '%s - Vue.js'
class: company-logo-top-right
author: Ema Zyka
highlighter: shiki
presenter: true
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
growX: 50
growY: 130
growSize: 1.5
favicon: /vue.svg
---

<h1 flex="~ col">
<div text-4xl op50>Navigating through Vue.js 2 EOL<br/>and Vue 3 Migration</div>
<div>Beyond the Sunset 🌅</div>
</h1>

<div uppercase text-sm tracking-widest op50>
Ema Zyka
</div>

<div abs-br mx-26 my-16 flex="~ col gap-4 items-end" text-left>
  <img src="/Voxxed-Days-Ioannina-logo-white-trans-300x84.png" h-12 alt="Devoxx Ioannina">
  <div text-xs opacity-75 mt--4>Feb. 23rd 2024</div>
</div>

<!--
Good afternoon - thank you<br/>
developers explore journey - avoiding<br/>
But EOL Dec 2023<br/>
prepare ourselves<br/>
better face upgrade efforts<br/>

navigate nuances migration<br/>
ensuring we leave this room with a roadmap<br/>
makes the journey<br/>
less like a chore<br/>
more like an exciting puzzle<br/>
solve efficiently and effectively<br/>

transitioning - not merely about adopting a new version<br/>
leveraging the significant improvements V3 offers<br/>
all promise - elevate our development practices
-->

---
layout: intro
class: company-logo-top-right text-2xl
growX: 0
growY: 90
style: 'padding-left: 9rem;'
---

# Ema Zyka

<div class="leading-10 opacity-80">
<div flex="~ gap-3" items-center>
    <div>Lead Software Engineer</div>
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

<!--
Let me introduce myself<br/>
My name is Ema Zyka<br/>
a lead software engineer ALS<br/>
Vue.js enthusiast<br/>
Beyond my role at ALS<br/>
where we innovate in the lottery and gaming sector<br/>
I like web technologies and frameworks<br/>
my Vue.js journey rewarding & long<br/>
co-organizer of the Vue.js Athens meetup<br/>
connect - share - learn
-->

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
layout: intro
class: text-2xl
growX: -10
growY: 50
---

#### Vue.js 2 EOL {.op60}

## What does this mean? <div i-logos-vue text-2xl inline-block />

<div mt-10 />

<v-clicks>

Vue 2.7 is the final minor release of Vue 2.x

Received 18 months of LTS

DX gap between the two major versions are no longer that prominent

</v-clicks>

<!--

With Vue.js 2 reaching its end-of-life (EOL), it signifies a pivotal moment for developers and projects relying on this
version.

Vue 2.7 is the current, and final minor release of Vue 2.x.

Vue 2.7 received 18 months of LTS (long-term support) starting from its release date on July, 2022

During that period, Vue 2 received necessary bug and security fixes, but did no longer receive new features.

So what does this mean for us?

Due to 2.7, the DX gap between the two major versions are no longer that prominent
-->

---
layout: intro
class: text-2xl
growX: 100
growY: 50
---

#### Vue.js 2.7 {.op60}

## Expectations

<div mt-10 />

<v-clicks>

<div mt-6>Available in all distribution channels</div>
<div mt-2>Will no longer receive updates</div>
<div mt-2>Will be hard to find compatible packages</div>
<div mt-2>Security and browser compatibility fixes, with SLAs by <b>HeroDevs</b></div>

</v-clicks>
---
layout: intro
class: text-2xl
growX: 100
growY: 5
---

#### Should I upgrade? {.op60}

## Things to consider

<div mt-10 />

<div flex="~ gap-1">
<v-clicks>
    <div>
        App stability<br/>
        Test Coverage<br/>
        App resilience to changes<br/>
        Regressing the app<br/>
        Continued feature development<br/>
    </div>
    <div>
        Pain-points addressed by upgrading<br/>
        Non compatible dependencies<br/>
        Changed behavior between the 2 major versions<br/>
        The cost of upgrading<br/>
        Team allocation<br/>
    </div>
</v-clicks>
</div>


<!--
Ask your team these questions: is the app stable and working well?

Does the app expect continued new feature development into the future?

Is there a pain-point / bottleneck that can only be solved by upgrading?

Understand the cost of upgrading

Does the app rely on 3rd party dependencies that are hard to be made Vue 3 compatible?

Does the app rely heavily on changed behavior between Vue 2 and Vue 3?

Can the team allocate dedicated time for upgrading?

There can't be any precise formula to make these assesments, but hopefully such questions will help you in the decision
making.

-->

---
layout: intro
class: text-2xl
---

#### Remaining in Vue.js 2{.op60}

<h2 important-text-5xl important-mt-0>What should I do?</h2>

<div mt-10 />

<v-clicks>

Upgrade to Vue 2.7

Avoid using the deprecated features or patterns

Continue development with Vue.js 3 future transition in mind

</v-clicks>

---
layout: center
growX: 0
growY: 100
---

## Why upgrade to Vue 3?

<div grid grid-cols-3 gap-6xl mt-16 text-center>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-teenyicons-typescript-outline text-7xl inline-block />
        <div>More refined TS support</div>
    </div>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-simple-icons-pagespeedinsights text-7xl />
        <div>Better performance</div>
    </div>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-material-symbols-globe text-7xl />
        <div>Access to the ecosystem</div>
    </div>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-fa6-solid-plus text-7xl />
        <div>Future new features</div>
    </div>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-la-handshake text-7xl />
        <div>APIs shared between<br/>the 2 major versions</div>
    </div>
    <div flex="~ gap-xl col items-center" v-click>
        <div i-emojione-monotone-nerd-face text-7xl />
        <div>Small learning curve</div>
    </div>
</div>

---

# The Ecosystem

<div flex="~ gap-10" mt10>
    <div flex="~ col gap-9">
        <div v-click="1">
            <div>
                <h3>New versions</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Router 4.x
                </div>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Devtools 6.x
                </div>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Test utils 2.x
                </div>
            </div>
        </div>
        <div v-click="2">
            <div>
                <h3>Build Toolchain</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Vue CLI 
                </div>
                <div>
                    <div i-carbon-arrow-right text-xl op50/>
                </div>
                <div>
                    <img src="/vite.svg" h9 mr1 inline-block /> Vite
                </div>
            </div>
        </div>
        <div v-click="3">
            <div>
                <h3>State Management</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Vuex 
                </div>
                <div>
                    <div i-carbon-arrow-right text-xl op50/>
                </div>
                <div>
                    <img src="/pinia.svg" h9 mr1 inline-block /> Pinia
                </div>
            </div>
        </div>
        <div v-click="4">
            <div>
                <h3>JSX</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> @vue/babel-preset-jsx 
                </div>
                <div>
                    <div i-carbon-arrow-right text-xl op50/>
                </div>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> @vue/babel-plugin-jsx
                </div>
            </div>
        </div>
     </div>
     <div flex="~ col gap-9">
        <div v-click="5">
            <div>
                <h3>IDE Support</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> Vetur 
                </div>
                <div>
                    <div i-carbon-arrow-right text-xl op50/>
                </div>
                <div>
                    <img src="/volar.svg" h9 mr1 inline-block /> Volar 
                </div>
            </div>
        </div>
        <div v-click="6">
            <div>
                <h3>New CL TS support</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vue.svg" h6 mr1 inline-block /> vue-tsc 
                </div>
            </div>
        </div>
        <div v-click="7">
            <div>
                <h3>SSG</h3>
            </div>
            <div flex="~ items-center gap-6" mt2>
                <div>
                    <img src="/vuepress.png" h12 mr1 inline-block /> VuePress 
                </div>
                <div>
                    <div i-carbon-arrow-right text-xl op50/>
                </div>
                <div>
                    <img src="/vitepress.svg" h10 mr1 inline-block /> VitePress
                </div>
            </div>
        </div>
    </div>
</div>

---
layout: center
growX: 50
growY: 50
---

<h1 font-bold class="text-5xl!" flex="~ gap-3 items-center">
  <span v-click>Vue.js 3</span>
  <div i-logos-vue text-6xl inline-block />
  <span v-after>Features</span>
</h1>

<div absolute left-50 top-80 v-click>Composition API</div>
<div absolute left-100 top-80 v-click>Composition API Syntax Sugar</div>

<v-click>
<div absolute left-52 top-50>Teleport</div>
<div absolute left-85 top-50>createRenderer API</div>
</v-click>

<v-click>
<div absolute left-137 top-50 >Emits Component Option</div>
<div absolute left-60 top-90 op80>SFC style scoped rules</div>
</v-click>

<v-click>
<div absolute left-85 top-40>State-driven CSS Variables</div>
<div absolute left-150 top-40 op70>State-driven CSS Variables</div>
<div absolute left-125 top-90 op60>Seamless TypeScript Support</div>
</v-click>

<v-click>
<div absolute left-180 top-80>Fragments</div>
<div absolute left-55 top-40 op70>Suspense</div>
</v-click>

---
layout: intro
class: text-2xl
---

#### Where to begin with? Consider the team effort {.op60}

<div flex="~ col gap-5 items-center justify-center" h="90%" mt22 text-center>
  <div
    transition-all duration-1000
    flex="~ col gap-1 items-center"
    :class="$clicks >= 1 ? '' : 'op0 mt--20'"
  >
    Are there things that many teams need <br/>to repeat the upgrade process? (e.g. seed app)
  </div>
  <div w-1px h-8 border="l gray" transition-all duration-1000
    :class="$clicks >= 2 ? '' : 'op0 mt--20'"
   />
  <div
    transition-all duration-1000
    flex="~ col gap-1 items-center"
    :class="$clicks >= 2 ? '' : 'op0 mt--20'"
  >
    Is there Vue.js familiarity on your team?
  </div>
  <div w-1px h-8 border="l gray" transition-all duration-1000 v-click="3" />
  <div
    transition-all duration-1000
    flex="~ col gap-1 items-center"
    :class="$clicks >= 3 ? '' : 'op0 mt--20'"
  >
    Can you break down the work into small tasks<br/>so that many members can contribute to the upgrade?
  </div>
</div>

---
layout: intro
class: text-2xl
growX: 60
growY: -10
---

#### Navigating Through Deprecated Features and Patterns {.op60}

<h2 important-text-5xl important-mt-0>Clear understanding</h2>

<div mt-10 />

<v-clicks>

Which features are deprecated?

Which of them do you utilize in your app?

Consider enough preparation time for your action plan

Analyze the warnings to refactor your code incrementally

Tackle warnings in groups

</v-clicks>

---
class: h-full text-2xl
growX: 50
growY: 130
---

#### Prepare the state of your app {.op60}

<h2 important-text-5xl important-mt-0>How well is your app maintained?</h2>

<div mt-10 />

<v-clicks>

Are there components that we need to change 100 times?

Can you wrap some components so that you can do the work once?

Is there undocumented behavior?

Are there private properties being accessed? e.g. on VNodes

</v-clicks>

---
class: h-full text-2xl
growX: 0
---

#### Prepare the state of your app {.op60}

<h2 important-text-5xl important-mt-0>Facilitating a gradual upgrade</h2>

<div mt-10 />

<v-clicks>

Upgrade the dependencies to their latest version, if possible

Identify the dependencies that need to be replaced

Avoid using the deprecated features and patterns

Create the abstractions you need

Identify commonalities in your approach of addressing issues

</v-clicks>

---
layout: intro
class: text-2xl
---

#### Strategy {.op60}

<h2 important-text-5xl important-mt-0>Continuous development</h2>

<div mt-10 />

<v-clicks>

How are you going to work?

Are you able to have a code freeze?

Will you maintain features on both branches?

</v-clicks>

---
layout: center
class: text-3xl text-center
growX: 50
growY: 50
---

#### Compatibility mode {.op60}

<h2 important-text-5xl important-mt-0>The migration build</h2>

<div mt-10 />

<quote>It is a unique version of Vue 3 designed to make <br/>the transition smoother</quote>

---
layout: center
class: text-2xl
---

#### Compatibility mode {.op60}

<h2 important-text-5xl important-mt-0>What to expect from it?</h2>

<div mt-10 />

<v-clicks>

Configurable compatible behavior

Vue 2 mode by default

Most public APIs behave exactly like Vue 2

Runtime warnings

Configurable per-component

Space for practice and learning

</v-clicks>

---
layout: center
class: text-2xl
growX: -10
growY: 50
---

#### Compatibility mode {.op60}

<h2 important-text-5xl important-mt-0>Note-worthy limitations</h2>

<v-clicks>
<div mt-6>Dependencies that rely on internal APIs</div>
<div mt-2>Undocumented behavior</div>
<div mt-2>No IE 11 support</div>
</v-clicks>

---
layout: intro
class: text-2xl
---

#### Compatibility mode {.op60}

<h2 important-text-5xl important-mt-0>Remove dependencies</h2>

<v-clicks>
<div mt-6>Uninstall Vue 2</div>
<div mt-2>Uninstall non compatible dependencies</div>
<div mt-2>Add them later on</div>
</v-clicks>

---
layout: center
class: text-2xl
growX: -10
growY: 50
---

#### Compatibility mode {.op60}

<h2 important-text-5xl important-mt-0>Activating the migration Build</h2>

<v-clicks>
<div mt-6>Install Vue 3 along with the migration build</div>

<div w-lg>

```bash
npm install vue@next @vue/compat
```

</div>

</v-clicks>

---
layout: center
class: text-2xl
---

#### Build configuration {.op60}

<h2 important-text-5xl important-mt-0>Resolve Vue</h2>

<div mt-10 />

<div w-lg>

```ts
module.exports = {
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  }
}
```

</div>

---
layout: center
class: text-2xl
---

#### Modify Vue's typing {.op60}

<h2 important-text-5xl important-mt-0>Expose the default export</h2>

<div mt-10 />

<div w-lg>

```ts
declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
  const {configureCompat} = Vue
  export { configureCompat }
}
```

</div>

---
layout: center
class: text-xl
growX: -10
growY: 50
---

#### Compat Configuration <sup bg-orange bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>Vue.js 2 mode</sup>

<h2 important-text-5xl important-mt-0>Global configuration</h2>

<div mt-10 />

<div w-lg>

```ts
import { configureCompat } from 'vue'

configureCompat({
  GLOBAL_MOUNT: false, // new Vue() -> createApp
  INSTANCE_SCOPED_SLOTS: false, // vm.$scopedSlots removed
})
```
<div mt-10 />

Default is Vue 2

Disable compatibility for certain features

You can tackle them in groups and disable each feature at a time

</div>

---
layout: center
class: text-xl
growX: -10
growY: 50
---

#### Compat Configuration <sup bg-green bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>Vue.js 3 mode</sup>

<h2 important-text-5xl important-mt-0>Global configuration</h2>

<div mt-10 />

<div w-lg>

```ts
import { configureCompat } from 'vue'

configureCompat({
    MODE: 3,
    INSTANCE_EVENT_EMITTER: true, // vm.$on, vm.$off, vm.$once removed
})
```

</div>

<div mt-10 />

Enable Vue 3 behavior

Enable compatibility for specific features in Vue 3

---
layout: center
class: text-2xl
---

#### Compat Configuration {.op60}

## Per-Component Config

<div w-lg>

```ts
export default {
  compatConfig: {
    // opt-in to Vue 3 behavior for this component only
    MODE: 3,
    // features can also be toggled at component level
    INSTANCE_SCOPED_SLOTS: true,
  }
}
```

</div>

---
layout: center
class: text-2xl
---

#### Compat Configuration {.op60}

## Compiler-specific Config

<div w-lg>

```ts {8-13}
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 2,
              COMPILER_V_BIND_SYNC: false,
            }
          }
        }
      }
    ]
  }
}
```

</div>

---
layout: center
class: text-2xl
growX: -10
growY: 50
---

#### Example Configs {.op60}

## Vue CLI

<div w-lg>

```ts {3|11-15}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
              return {
                ...options,
                compilerOptions: {
                  compatConfig: {
                    MODE: 2
                  }
                }
              }
            })
  }
}
```

</div>

---
layout: center
class: text-2xl
growX: -10
growY: 50
---

#### Example Configs {.op60}

## Vite

<div w-lg>

```ts {4|10-14}
export default {
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ]
}
```

</div>

---
layout: center
class: text-2xl text-center
growX: 50
growY: 50
---

#### Resolve compiler warnings {.op60}

<h2 important-text-4xl important-mt-0>Fixing</h2>

The warnings that originate from <br/>your own source code first

---
layout: center
class: text-xl
---

## Update `<transition>` class names

`x-enter` should be updated to `x-enter-from`

<div w-lg v-click.hide="'1'" :class="$clicks >= 1 ? 'h0' : ''">

```css {1}
.slide-left-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
```
</div>
<div w-lg v-click :class="$clicks >= 1 ? '' : 'h0'">

```css {1}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(30px, 0);
}
```
</div>

<v-click>

Note there will be no runtime warnings for this

Fix this upfront by searching the codebase for 

`*-enter` CSS class names

</v-click>
---
layout: center
class: text-2xl
growX: 0
growY: 30
---

#### Update <sup bg-orange bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>Vue.js 2.x</sup>

## The app entry

<div mt-5 />

<div w-lg>

```ts
new Vue({
  el: '#app',
})
```

</div>

---
layout: center
class: text-2xl
growX: 0
growY: 30
---

#### Update <sup bg-green bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>Vue.js 3.x</sup>

## The app entry

<div mt-5 />

<div w-lg>

```ts
import { createApp } from 'vue'

const app = createApp({})

app.mount('#app')
```

</div>

---
layout: center
class: text-2xl
---

#### Vue 3 compatible {.op60}

<h2 important-text-5xl important-mt-0>Upgrade your dependencies</h2>

For example, upgrade `vue-router` and `vuex` to the latest version
---
layout: center
class: text-2xl
---

#### Breaking Changes {.op60}

## Documentation structure

<div mt-10 />

<v-clicks>

The [overview](https://v3-migration.vuejs.org/breaking-changes/v-model.html#overview)

Understand how the [Vue 2 syntax](https://v3-migration.vuejs.org/breaking-changes/v-model.html#_2-x-syntax) works

Understand the [Vue 3 syntax](https://v3-migration.vuejs.org/breaking-changes/v-model.html#_3-x-syntax) changes that need to be made

Disable the [build flags](https://v3-migration.vuejs.org/breaking-changes/v-model.html#migration-strategy) once they are fixed

</v-clicks>

---
layout: center
class: text-2xl
---

#### Vue.js 2.x <sup bg-cyan bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>filters</sup> {.op60}

## Removed APIs

<div mt-5 />

<div w-lg>

```html {1-3|13-17}
<template>
  <p>{{ accountBalance | currencyUSD }}</p>
</template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true
      }
    },
    filters: {
      currencyUSD(value) {
        return '$' + value
      }
    }
  }
</script>
```

</div>

---
layout: center
class: text-2xl
---

#### Vue.js 3.x <sup bg-cyan bg-op-80 rd-1 text-2 uppercase fw-semibold p-0.6>filters</sup> {.op60}

## Removed APIs

<div mt-5 />

<div w-lg>

```html {1-3|13-17}
<template>
  <p>{{ accountInUSD }}</p>
</template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true
      }
    },
    computed: {
      accountInUSD() {
        return '$' + this.accountBalance
      }
    }
  }
</script>
```

</div>

---
class: text-2xl
growX: 70
growY: 60
---

### Good job! {.op60}

<h2 important-text-5xl important-mt-0>Finally</h2>

<div mt-5 />

When all warnings are fixed,

uninstall `@vue/compat`

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
