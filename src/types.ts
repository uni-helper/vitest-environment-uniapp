export type UniAppBuiltinEnvironment = 'happy-dom' | 'jsdom'

export interface UniAppWindow extends Window {
  uni: UniAppWindow
}

export type EnvironmentUniApp = (
  global: any,
  options: Record<string, any>
) => Promise<{
  window: UniAppWindow
  teardown(): void
}>
