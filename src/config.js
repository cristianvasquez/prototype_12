import { ItemType } from 'golden-layout'

const HOME = {
  title: 'Hello World',
  componentType: './components/HelloWorld.vue',
}

const SETTINGS = {
  title: 'Settings',
  componentType: './components/Settings.vue',
}

const GRAPH = {
  title: 'Graph',
  componentType: './components/Graph.vue',
}


const baseLayout = {
  root: {
    type: ItemType.row,
    content: [
      {
        type: 'component',
        header: { show: 'top' },
        isClosable: false,
        width: 40,
        componentState: undefined,
        ...HOME
      },
      {
        type: 'component',
        header: { show: 'top', popout: false },
        width: 40,
        componentState: { abc: 123 },
        ...SETTINGS
      },
    ],
  },
}

export { HOME, SETTINGS, GRAPH, baseLayout }
