import { ItemType } from 'golden-layout'
import { HOME, SETTINGS, GRAPH  } from './config.js'

const minimal = {
  root: {
    type: ItemType.row,
    content: [
      {
        type: 'component',
        header: { show: 'top' },
        isClosable: false,
        width: 80,
        componentState: undefined,
        ...GRAPH
      }
    ],
  },
}

const contentLayout = {
  root: {
    type: ItemType.row,
    content: [
      {
        type: ItemType.column,
        width: 20,
        content: [
          {
            type: 'component',
            header: { show: 'top' },
            isClosable: false,
            height: 60,
            componentState: undefined,
            ...HOME,
          },
          {
            type: 'component',
            header: { show: 'top' },
            isClosable: true,
            height: 30,
            componentState: undefined,
            ...SETTINGS,
          },
        ],

      },
      {
        type: 'component',
        header: { show: 'top', popout: false },
        width: 30,
        componentState: undefined,
        ...GRAPH,
      },
      {
        type: 'component',
        header: { show: 'top', popout: false },
        width: 30,
        componentState: undefined,
        ...GRAPH,
      },
    ],
  },
}
export { minimal, contentLayout }
