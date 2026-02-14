declare module '@dcloudio/uni-automator' {
  export interface UniInitOptions {
    platform?: string
    devtools?: {
      remote?: boolean
    }
  }

  export class Automator {
    constructor()
    launch(options?: UniInitOptions): Promise<void>
  }


  export function initUni(program: unknown): Promise<void>
}
