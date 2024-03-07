it('global uni', () => {
  expect(typeof uni).not.toBe('undefined')
})

it('uni.request', async () => {
  expect(typeof uni.request).toBe('function')

  const { data } = await uni.request({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  })
  expect(typeof data).toBe('object')
})
