/**
 * Vitest Custom Environment for uni-app Automator
 *
 * This module provides a Vitest environment that integrates with uni-app's automator,
 * allowing you to run automated tests on uni-app projects using Vitest.
 *
 * Based on the original Jest environment implementation:
 * https://github.com/dcloudio/uni-app/blob/next/packages/uni-automator/dist/environment.js
 * https://github.com/dcloudio/uni-app/blob/next/packages/uni-automator/dist/teardown.js
 */

import type { UniInitOptions } from '@dcloudio/uni-automator'
import type { Environment } from 'vitest/environments'
import process from 'node:process'
import { Automator, initUni } from '@dcloudio/uni-automator'

interface Global {
  program: {
    teardown: () => Promise<void>
  }
  uni: unknown
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

class UniAppEnvironment implements Environment {
  name = 'uni-app'
  viteEnvironment = 'ssr'
  private TIME_TEARDOWN = 3000
  private _store: Record<string, any> = {
    init: false,
  }

  async setup(global: Global, options: { uniapp?: UniInitOptions }) {
    const uniappOptions = options?.uniapp
    if (this._store.init) {
      if (!global.program) {
        throw new Error('测试环境初始化失败，请重新运行测试')
      }
    }
    else {
      try {
        const platform = uniappOptions?.platform || process.env.UNI_PLATFORM
        const automator = new Automator()
        const program = await automator.launch({
          ...uniappOptions,
          platform,
        })

        if (uniappOptions?.devtools?.remote) {
          await program.remote(true)
        }

        const uni = initUni(program)
        this._store.uni = uni
        this._store.program = program
        this._store.init = true
      }
      catch (error) {
        this._store.init = false
        console.error('测试环境初始化失败', error)
        throw error
      }
    }

    global.uni = this._store.uni
    global.program = this._store.program

    return {
      teardown: async (global: Global) => {
        const { program } = global
        if (program && typeof program.teardown === 'function') {
          await program.teardown()
          await sleep(this.TIME_TEARDOWN)
        }
      },
    }
  }
}

const uniAppEnvironment = new UniAppEnvironment()
export default uniAppEnvironment
