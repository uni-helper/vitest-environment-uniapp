import { beforeAll, describe, expect, it } from 'vitest'

describe('test title', () => {
  let page: Page
  beforeAll(async () => {
    console.log('beforeAll')
    page = await program.currentPage()
    console.log('page', page)
    await page.waitFor(3000)
  })

  it('check page title', async () => {
    const el = await page.$('.title') // page.$(selector: string) 选择器(id、class、元素选择器)
    const titleText = await el.text()
    expect(titleText).toEqual('Hello')
  })
})
