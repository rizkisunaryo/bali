import { initializeStore } from '../store'

let store

beforeEach(() => {
  store = initializeStore()
})

describe('metadata', () => {
  describe('reducers', () => {
    describe('setMetadata', () => {
      it('should set metadata', () => {
        const data = { a: 'b', c: 'd' }
        store.dispatch.metadata.setMetadata(data)
        expect(store.getState().metadata).toStrictEqual(data)
      })
    })
  })
})

describe('products', () => {
  describe('effects', () => {
    describe('fetchProductsIfNeeded', () => {
      it('should set not fetch products if has been set', async () => {
        const firstResults = [
          {
            id: 'ID 1'
          }
        ]
        fetch.once(
          JSON.stringify({
            metadata: {
              query: 'query test',
              page: 3,
              pages: 5,
              total: 200
            },
            results: firstResults
          })
        )
        await store.dispatch.products.fetchProductsIfNeeded()

        const secondResults = [
          {
            id: 'ID 2'
          }
        ]
        fetch.once(
          JSON.stringify({
            metadata: {
              query: 'query test',
              page: 3,
              pages: 5,
              total: 200
            },
            results: secondResults
          })
        )
        await store.dispatch.products.fetchProductsIfNeeded()

        expect(store.getState().products).toStrictEqual([
          {
            id: 'ID 1'
          }
        ])
      })
    })
  })
})
