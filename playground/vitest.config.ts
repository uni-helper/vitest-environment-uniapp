import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'uniapp',
    environmentOptions: {
      uniapp: {
        compile: true,
        platform: 'mp-weixin',
        projectPath: './src',
        port: 5121,
      },
    },
  },
})
