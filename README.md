<a href="https://uni-helper.js.org/vitest-environment-uniapp"><img src="./banner.svg" alt="banner" width="100%"/></a>

<a href="https://github.com/uni-helper/vitest-environment-uniapp/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/flippedround/vitest-environment-uniapp"><img src="https://img.shields.io/npm/dm/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/flippedround/vitest-environment-uniapp"><img src="https://img.shields.io/npm/v/vitest-environment-uniapp?colorA=005947&colorB=eee&style=for-the-badge"></a>
<br/>

# Vitest 的 uni-app e2e 测试环境

> [!IMPORTANT]
> 该项目依赖 `@dcloudio/uni-automator` 必须安装
> h5 平台下，需要安装 `playwright` ; 但目前无法获取启动状态导致超时
> environmentOptions 参数同 [uni-app 官方文档](https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html#jestconfigjs) , 但官网长久未更新，导致参数与实际不符

## 安装

```bash
pnpm i -D vitest-environment-uniapp
```

## 使用

```bash
pnpm test
```
> package.json
```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

> vitest.config.ts
```ts
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
      }
    },
  },
})
```
> tsconfig.json
```json
{
  "compilerOptions": {
    "types": [
      "vitest-environment-uniapp/types"
    ]
  }
}
```
