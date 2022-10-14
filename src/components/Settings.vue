<script setup>
import { NInput, NSpace } from 'naive-ui'
import { onBeforeMount, onMounted, ref } from 'vue'
import { baseLayout, contentLayout } from '../layouts.js'

const layouts = [
  { name: 'Default layout', data: baseLayout },
  { name: 'Content', data: contentLayout },
]

onBeforeMount(() => {

})

</script>

<template>
  <div class="layouts">

    <div>I'm the settings</div>

  </div>
</template>

<style scoped>
.layouts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
