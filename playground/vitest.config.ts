import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'uniapp',
    environmentOptions: {
      compile: true,
      platform: 'mp-weixin',
      projectPath: './src',
      port: 5121,
      h5: {
        url: 'http://localhost:5180/', // 改成你的 H5 服务器地址
        options: {
          headless: false, //
        },
      },
    },
  },
})
