import { importModule } from 'local-pkg'
import type { EnvironmentUniApp } from '../types'

export default <EnvironmentUniApp> async function (_, { happyDom = {} }) {
  const { Window, GlobalWindow } = (await importModule(
    'happy-dom',
  )) as typeof import('happy-dom')
  const window = new (GlobalWindow || Window)(happyDom) as any

  return {
    window,
    teardown() {
      window.happyDOM.cancelAsync()
    },
  }
}
