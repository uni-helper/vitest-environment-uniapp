import { createApp } from 'vue'

export function withSetup<T>(composable: () => T) {
  let result: T
  const app = createApp({
    setup() {
      result = composable()
      // 忽略模板警告
      return () => {}
    },
  })
  app.mount(document.createElement('div'))
  // @ts-expect-error ignore
  return [result, app] as const
}
