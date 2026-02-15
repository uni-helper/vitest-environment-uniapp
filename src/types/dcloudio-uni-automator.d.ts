declare module '@dcloudio/uni-automator' {
  export interface UniInitOptions {
    platform?: string
    devtools?: {
      remote?: boolean
    }
  }

  export interface program {
    remote: (enable: boolean) => Promise<void>
  }

  export class Automator {
    constructor()
    launch(options?: UniInitOptions): Promise<program>
  }

  export function initUni(program: unknown): Promise<unknown>
}
