import { checkServer } from '..'

describe('utils/index', () => {
  it('should return false if window exists', () => {
    global.window = {}
    expect(checkServer()).toBe(false)
  })
})
