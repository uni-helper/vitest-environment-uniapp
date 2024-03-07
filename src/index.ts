import type { Environment } from 'vitest'
import { populateGlobal } from 'vitest/environments'
import uni from '@dcloudio/uni-h5'
import { joinURL } from 'ufo'
import defu from 'defu'
import type { UniAppBuiltinEnvironment } from './types'
import happyDom from './env/happy-dom'
import jsdom from './env/jsdom'

const environmentMap = {
  'happy-dom': happyDom,
  jsdom,
}

export default <Environment>({
  name: 'uniapp',
  transformMode: 'web',
  async setup(global, environmentOptions) {
    // TODO: read vite.config.ts
    const url = joinURL('http://localhost:5174', '/')
    const environmentName = (environmentOptions.uniapp?.domEnvironment ?? 'jsdom' as UniAppBuiltinEnvironment)
    const environment = environmentMap[environmentName]
    const { window: win, teardown } = await environment(global, defu(environmentOptions, {
      happyDom: { url },
      jsdom: { url },
    }))
    win.uni = uni
    // TODO: uni-h5-vite\src\plugins\pagesJson.ts
    win.__uniConfig = {
      networkTimeout: {
        request: 60000,
      },
    }
    const { keys, originals } = populateGlobal(global, win, {
      bindFunctions: true,
    })

    return {
      teardown() {
        keys.forEach(key => delete global[key])
        originals.forEach((v, k) => (global[k] = v))
        teardown()
      },
    }
  },
})
