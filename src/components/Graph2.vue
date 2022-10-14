<script setup>

import { Graph } from '@antv/x6'
import { onMounted, ref } from 'vue'

const graphRoot = ref()
onMounted(()=>{
  // Create an instance of Graph.
  const graph = new Graph({
    container: graphRoot.value,
    grid: true,
    modes: {
      default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
    },
    layout: {
      type: 'forceAtlas2',
      preventOverlap: true,
      kr: 10,
      center: [250, 250],
    },
    defaultNode: {
      width: 80,
      height: 40,
    },
  })

// Render source node.
  const source = graph.addNode({
    x: 300,
    y: 40,
    width: 80,
    height: 40,
    label: 'Hello',
  })

// Render target node.
  const target = graph.addNode({
    x: 420,
    y: 180,
    width: 80,
    height: 40,
    label: 'World',
  })

  // Render target node.
  const other = graph.addNode({

    width: 100,
    height: 40,
    label: 'Other',
  })

// Render edge from source to target.
  graph.addEdge({
    source,
    target,
  })

})


</script>

<template>

  <div ref="graphRoot" class="graphRoot" >
    <!-- Root dom for Graph -->
  </div>

</template>

<style>

.graphRoot {
  background-color: lightyellow;
  position: absolute; width: 100%; height: 100%
}

</style>
