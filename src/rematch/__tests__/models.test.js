import { initializeStore } from '../store'

let store

beforeEach(() => {
  store = initializeStore()
})

describe('dummy', () => {
  describe('reducers', () => {
    describe('pushDummy', () => {
      it('should push element', () => {
        store.dispatch.dummy.pushDummy(1)
        expect(store.getState().dummy).toStrictEqual([1])
      })
    })
  })
  describe('effects', () => {
    describe('pushDummyAsync', () => {
      it('should push element if empty', async () => {
        await store.dispatch.dummy.pushDummyAsync(2)
        expect(store.getState().dummy).toStrictEqual([2])
      })
      it('should not push element if dummy state already has the same element', async () => {
        await store.dispatch.dummy.pushDummyAsync(3)
        await store.dispatch.dummy.pushDummyAsync(3)
        expect(store.getState().dummy).toStrictEqual([3])
      })
    })
  })
})
