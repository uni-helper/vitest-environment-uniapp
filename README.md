<a href="https://uni-helper.js.org/vitest-environment-uniapp"><img src="./banner.svg" alt="banner" width="100%"/></a>

<a href="https://github.com/uni-helper/vitest-environment-uniapp/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/flippedround/vitest-environment-uniapp"><img src="https://img.shields.io/npm/dm/flippedround/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/flippedround/vitest-environment-uniapp"><img src="https://img.shields.io/npm/v/flippedround/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<br/>

# 由 [uni-helper](https://uni-helper.js.org) 封装的uni命令

## 安装

```bash
pnpm i -D vitest-environment-uniapp
```

## 使用


```bash
pnpm test
```

```json
// package.json
{
  "scripts": {
    "test": "vitest",
  }
}
```

```ts
// unh.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'uniapp',
    environmentOptions: {
      compile: true,
      platform: 'h5', // 测试平台
      projectPath: './src', // manifest.json 所在目录
      port: 5121,
      h5: {
        url: 'http://localhost:5180/', // 改成你的 H5 服务器地址
        options: {
          headless: false, // 是否无头模式
        },
      },
    },
  },
})

```
