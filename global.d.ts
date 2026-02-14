declare global {
  /**
   * Element 模块提供了控制页面元素的方法
   */
  interface Element {
    /**
     * 元素标签名,小写
     */
    tagName: string
    /**
     * 获取页面元素
     * @example
     * ```ts
     * const el = await el.$('.title')
     * ```
     */
    $: (selector: string) => Promise<Element>
    /**
     * 获取页面元素列表
     * @example
     * ```ts
     * const elements = await el.$$('.item')
     * ```
     */
    $$: (selector: string) => Promise<Element[]>
    /**
     * 获取元素尺寸
     * @example
     * ```ts
     * const size = await el.size()
     * console.log(size.width, size.height)
     * ```
     */
    size: () => Promise<{ width: number, height: number }>
    /**
     * 获取元素位置
     * @example
     * ```ts
     * const offset = await el.offset()
     * console.log(offset.x, offset.y)
     * ```
     */
    offset: () => Promise<{ x: number, y: number }>
    /**
     * 获取元素样式
     * @example
     * ```ts
     * const color = await el.style('color')
     * ```
     */
    style: (styleName: string) => Promise<string>
    /**
     * 获取元素文本
     * @example
     * ```ts
     * const text = await el.text()
     * ```
     */
    text: () => Promise<string>
    /**
     * 获取元素属性
     * @example
     * ```ts
     * const value = await el.property('value')
     * ```
     */
    property: (name: string) => Promise<unknown>
    /**
     * 点击元素
     * @example
     * ```ts
     * await el.tap()
     * ```
     */
    tap: () => Promise<void>
    /**
     * 长按元素
     * @example
     * ```ts
     * await el.longpress()
     * ```
     */
    longpress: () => Promise<void>
    /**
     * 触摸开始
     * @example
     * ```ts
     * await el.touchstart({ x: 100, y: 100 })
     * ```
     */
    touchstart: (options?: { x?: number, y?: number }) => Promise<void>
    /**
     * 触摸移动
     * @example
     * ```ts
     * await el.touchmove({ x: 200, y: 200 })
     * ```
     */
    touchmove: (options?: { x?: number, y?: number }) => Promise<void>
    /**
     * 触摸结束
     * @example
     * ```ts
     * await el.touchend()
     * ```
     */
    touchend: () => Promise<void>
    /**
     * 输入文本
     * @example
     * ```ts
     * await el.input('hello world')
     * ```
     */
    input: (value: string) => Promise<void>
    /**
     * 清空输入
     * @example
     * ```ts
     * await el.clear()
     * ```
     */
    clear: () => Promise<void>
    /**
     * 滚动到视图中
     * @example
     * ```ts
     * await el.scrollIntoView()
     * ```
     */
    scrollIntoView: () => Promise<void>
    /**
     * 对元素截图
     * @example
     * ```ts
     * const base64 = await el.screenshot()
     * await el.screenshot({ path: '/path/to/image.png' })
     * ```
     */
    screenshot: (options?: { path?: string }) => Promise<string | void>
  }

  /**
   * Page 模块提供了控制页面的方法
   */
  interface Page {
    /** 页面路径 */
    path: string
    /** 页面参数 */
    query: Record<string, unknown>
    /**
     * 获取页面元素
     * @example
     * ```ts
     * const el = await page.$('.title')
     * ```
     */
    $: (selector: string) => Promise<Element>
    /**
     * 获取页面元素列表
     * @example
     * ```ts
     * const elements = await page.$$('.item')
     * ```
     */
    $$: (selector: string) => Promise<Element[]>
    /**
     * 获取页面数据
     * @example
     * ```ts
     * const data = await page.data()
     * ```
     */
    data: () => Promise<unknown>
    /**
     * 设置页面数据
     * @example
     * ```ts
     * await page.setData({ title: 'Hello' })
     * ```
     */
    setData: (data: Record<string, unknown>) => Promise<void>
    /**
     * 调用页面方法
     * @example
     * ```ts
     * const result = await page.callMethod('methodName', param1, param2)
     * ```
     */
    callMethod: (method: string, ...args: unknown[]) => Promise<unknown>
    /**
     * 获取页面尺寸
     * @example
     * ```ts
     * const size = await page.size()
     * ```
     */
    size: () => Promise<{ width: number, height: number }>
    /**
     * 获取页面位置
     * @example
     * ```ts
     * const offset = await page.offset()
     * ```
     */
    offset: () => Promise<{ x: number, y: number }>
    /**
     * 点击元素
     * @example
     * ```ts
     * await page.tap('.button')
     * ```
     */
    tap: (selector: string) => Promise<void>
    /**
     * 长按元素
     * @example
     * ```ts
     * await page.longpress('.button')
     * ```
     */
    longpress: (selector: string) => Promise<void>
    /**
     * 触摸开始
     * @example
     * ```ts
     * await page.touchstart('.element', { x: 100, y: 100 })
     * ```
     */
    touchstart: (selector: string, options?: { x?: number, y?: number }) => Promise<void>
    /**
     * 触摸移动
     * @example
     * ```ts
     * await page.touchmove('.element', { x: 200, y: 200 })
     * ```
     */
    touchmove: (selector: string, options?: { x?: number, y?: number }) => Promise<void>
    /**
     * 触摸结束
     * @example
     * ```ts
     * await page.touchend('.element')
     * ```
     */
    touchend: (selector: string) => Promise<void>
    /**
     * 输入文本
     * @example
     * ```ts
     * await page.input('.input', 'hello world')
     * ```
     */
    input: (selector: string, value: string) => Promise<void>
    /**
     * 清空输入
     * @example
     * ```ts
     * await page.clear('.input')
     * ```
     */
    clear: (selector: string) => Promise<void>
    /**
     * 滚动到视图中
     * @example
     * ```ts
     * await page.scrollIntoView('.element')
     * ```
     */
    scrollIntoView: (selector: string) => Promise<void>
    /**
     * 获取页面 WXML
     * @example
     * ```ts
     * const wxml = await page.wxml()
     * ```
     */
    wxml: () => Promise<string>
    /**
     * 对当前页面截图
     * 微信小程序只有开发者工具模拟器支持，客户端无法使用
     * @example
     * ```ts
     * const base64 = await page.screenshot()
     * await page.screenshot({ path: '/path/to/image.png' })
     * ```
     */
    screenshot: (options?: { path?: string }) => Promise<string | void>
    /**
     * 等待元素出现或等待指定时间
     * @example
     * ```ts
     * await page.waitFor(3000)
     * await page.waitFor('.element')
     * ```
     */
    waitFor: (selectorOrTime: string | number) => Promise<void>
  }

  /**
   * uni-automator 自动注入的全局对象
   */
  const program: {
    /**
     * 获取当前页面栈
     * @example
     * ```ts
     * const pages = await program.pageStack()
     * ```
     */
    pageStack: () => Promise<Page[]>
    /**
     * 保留当前页面，跳转到应用内的某个页面，同 uni.navigateTo
     * @example
     * ```ts
     * const page = await program.navigateTo('/pages/detail/detail')
     * ```
     */
    navigateTo: (url: string) => Promise<Page>
    /**
     * 关闭当前页面，跳转到应用内的某个页面，同 uni.redirectTo
     * @example
     * ```ts
     * const page = await program.redirectTo('/pages/detail/detail')
     * ```
     */
    redirectTo: (url: string) => Promise<Page>
    /**
     * 关闭当前页面，返回上一页面或多级页面，同 uni.navigateBack
     * @example
     * ```ts
     * const page = await program.navigateBack()
     * ```
     */
    navigateBack: () => Promise<Page>
    /**
     * 关闭所有页面，打开到应用内的某个页面，同 uni.reLaunch
     * @example
     * ```ts
     * const page = await program.reLaunch('/pages/index/index')
     * ```
     */
    reLaunch: (url: string) => Promise<Page>
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同 uni.switchTab
     * @example
     * ```ts
     * const page = await program.switchTab('/pages/tabbar/tabbar')
     * ```
     */
    switchTab: (url: string) => Promise<Page>
    /**
     * 获取当前页面
     * @example
     * ```ts
     * const page = await program.currentPage()
     * ```
     */
    currentPage: () => Promise<Page>
    /**
     * 获取系统信息，同 uni.getSystemInfo
     * @example
     * ```ts
     * const systemInfo = await program.systemInfo()
     * ```
     */
    systemInfo: () => Promise<Record<string, unknown>>
    /**
     * 将页面滚动到目标位置，同 uni.pageScrollTo
     * @example
     * ```ts
     * await program.pageScrollTo(100)
     * ```
     */
    pageScrollTo: (scrollTop: number) => Promise<void>
    /**
     * 调用 uni 对象上的指定方法
     * 调用异步方法时无需传入 success 及 fail 回调函数
     * @example
     * ```ts
     * const result = await program.callUniMethod('showToast', { title: 'Hello' })
     * ```
     */
    callUniMethod: (method: string, ...args: unknown[]) => Promise<unknown>
    /**
     * 对当前页面截图
     * 微信小程序只有开发者工具模拟器支持，客户端无法使用
     * @example
     * ```ts
     * const base64 = await program.screenshot()
     * await program.screenshot({ path: '/path/to/image.png' })
     * ```
     */
    screenshot: (options?: { path?: string }) => Promise<string | void>
    /**
     * 覆盖 uni 对象上指定方法的调用结果
     * 利用该接口，你可以很方便地直接指定 uni.chooseLocation 等调用系统组件的返回结果
     * @example
     * ```ts
     * await program.mockUniMethod('chooseLocation', { name: '测试位置' })
     * await program.mockUniMethod('getLocation', () => ({ latitude: 0, longitude: 0 }))
     * ```
     */
    mockUniMethod: ((method: string, result: unknown) => Promise<void>) | ((method: string, fn: (() => unknown) | string, ...args: unknown[]) => Promise<void>)
    /**
     * 重置 uni 指定方法，消除 mockUniMethod 调用的影响
     * @example
     * ```ts
     * await program.restoreUniMethod('chooseLocation')
     * ```
     */
    restoreUniMethod: (method: string) => Promise<void>
    /**
     * 注入代码片段并返回执行结果（仅微信小程序支持）
     * appFunction 最终会被序列化传递到开发者工具，因此你无法在函数中利用闭包来引用外部变量
     * @example
     * ```ts
     * const result = await program.evaluate(() => {
     *   return uni.getStorageSync('key')
     * })
     * ```
     */
    evaluate: (appFunction: (() => unknown) | string, ...args: unknown[]) => Promise<unknown>
    /**
     * 获取多账号调试中已添加的用户列表（仅微信小程序支持）
     * @example
     * ```ts
     * const accounts = await program.testAccounts()
     * ```
     */
    testAccounts: () => Promise<Account[]>
    /**
     * 在全局暴露方法，供小程序侧调用测试脚本中的方法（仅微信小程序支持）
     * 你可以利用该方法来监听事件，不支持在小程序侧获取调用结果
     * @example
     * ```ts
     * await program.exposeFunction('onEvent', (data) => {
     *   console.log('收到事件', data)
     * })
     * ```
     */
    exposeFunction: (name: string, bindingFunction: (() => unknown)) => Promise<void>
  }
}
export {}
