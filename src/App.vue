
<script setup>
import { storeToRefs } from 'pinia'
import { Glayout, useLayoutStore } from 'playground-template'
import { onMounted } from 'vue'
import { HOME, SETTINGS, GRAPH } from './config.js'
import { minimal } from './layouts.js'

const store = useLayoutStore()
const { rootLayoutRef } = storeToRefs(store)
const { addInstance, loadLayoutConfig } = store

const components = [HOME, SETTINGS, GRAPH]

onMounted(() => {
  loadLayoutConfig(minimal)
})

</script>

<template>
  <div class="full-height">
    <div id="nav">
      <h1>Visual playground</h1>
      <template v-for="component of components">
        <button @click="addInstance(component)">
          {{ component.title }}
        </button>
      </template>
    </div>
    <glayout
        ref="rootLayoutRef"
        componentPathPrefix="../../../../src/"
        style="width: 100%; height: calc(100% - 90px)"
    ></glayout>
  </div>
</template>

<style>
@import "golden-layout/dist/css/goldenlayout-base.css";
@import "golden-layout/dist/css/themes/goldenlayout-dark-theme.css";

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.full-height, #app {
  height: 100%;
}
</style>



