<script setup>

import { ForceLayout } from '@antv/layout'
import { Graph } from '@antv/x6'

import { onMounted, ref } from 'vue'

const graphRoot = ref()
onMounted(()=> {
  // Create an instance of Graph.
  const graph = new Graph({
    container: graphRoot.value,
  })
  const originData = {
    nodes: [
      {
        id: 'node0',
        width: 80,
        height: 40,
        label: 'Hello',
        size: 50, x: 0, y: 0,},
      { id: 'node1', size: 30, x: 0, y: 0 },
      { id: 'node2', size: 30, x: 0, y: 0 },
      { id: 'node3', size: 30, x: 0, y: 0 },
      { id: 'node4', size: 30, x: 0, y: 0 },
      { id: 'node5', size: 30, x: 0, y: 0 },
      { id: 'node6', size: 15, x: 0, y: 0 },
      { id: 'node7', size: 15, x: 0, y: 0 },
      { id: 'node8', size: 15, x: 0, y: 0 },
      { id: 'node9', size: 15, x: 0, y: 0 },
      { id: 'node10', size: 15, x: 0, y: 0 },
      { id: 'node11', size: 15, x: 0, y: 0 },
      { id: 'node12', size: 15, x: 0, y: 0 },
      { id: 'node13', size: 15, x: 0, y: 0 },
      { id: 'node14', size: 15, x: 0, y: 0 },
      { id: 'node15', size: 15, x: 0, y: 0 },
      { id: 'node16', size: 15, x: 0, y: 0 },
    ],
    edges: [
      { source: 'node0', target: 'node1' },
      { source: 'node0', target: 'node2' },
      { source: 'node0', target: 'node3' },
      { source: 'node0', target: 'node4' },
      { source: 'node0', target: 'node5' },
      { source: 'node1', target: 'node6' },
      { source: 'node1', target: 'node7' },
      { source: 'node2', target: 'node8' },
      { source: 'node2', target: 'node9' },
      { source: 'node2', target: 'node10' },
      { source: 'node2', target: 'node11' },
    ],
  }
  const getModelFromOriginData = (data) => {
    const model = {
      nodes: [],
      edges: [],
    }
    originData.nodes.forEach((item) => {
      model.nodes?.push({
        id: item.id,
        x: item.x,
        y: item.y,
        width: item.size,
        height: item.size,
        label: item.label??'',
      })
    })
    originData.edges.forEach((item) => {
      model.edges?.push({
        source: item.source,
        target: item.target,
        label: item.label??'',
        attrs: {
          line: {
            stroke: '#A2B1C3',
            strokeWidth: 2,
            targetMarker: null,
          },
        },
      })
    })
    return model
  }

  const forceLayout = new ForceLayout({
    type: 'force',
    center: [369, 180],
    preventOverlap: true,
    linkDistance: (d) => {
      // if (d.source.id === 'node0') {
      //   return 100
      // }
      return 200
    },
    nodeStrength: (d) => {
      // if (d.isLeaf) {
      //   return -50
      // }
      return -10
    },
    edgeStrength: (d) => {
      // Could be useful to experiment with distinct
      // edge types
      //
      // if (
      //     d.source.id === 'node1' ||
      //     d.source.id === 'node2' ||
      //     d.source.id === 'node3'
      // ) {
      //   return 0.7
      // }
      return 0.1
    },
    tick: () => {
      const model = getModelFromOriginData(originData)
      graph.fromJSON(model)
    },
  })
  forceLayout.layout(originData)

})


</script>

<template>

  <div ref="graphRoot" class="graphRoot">
    <!-- Root dom for Graph -->
  </div>

</template>

<style>

.graphRoot {
  background-color: lightyellow;
  position: absolute;
  width: 100%;
  height: 100%
}

</style>
