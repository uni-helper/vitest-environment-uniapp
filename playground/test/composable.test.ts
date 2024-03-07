import { useCount } from '../src/composables/useCount'
import { withSetup } from './utils'

it('useCount', () => {
  const [result, app] = withSetup(() => useCount())

  expect(typeof result.count.value).toBe('number')
  app.unmount()
})
