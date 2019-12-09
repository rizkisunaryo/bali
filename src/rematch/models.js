import lodashget from '@rizkisunaryo/lodashget'

export const metadata = {
  state: null,
  reducers: {
    setMetadata: (_, payload) => payload
  }
}

export const products = {
  state: null,
  reducers: {
    setProducts: (_, payload) => payload
  },
  effects: dispatch => ({
    fetchProductsIfNeeded: async (_, rootState) => {
      if (rootState.products && rootState.products.length > 0) return
      const response = await fetch(
        'http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json'
      ).then(resp => resp.json())

      dispatch.products.setProducts(lodashget(response, 'results', []))
      dispatch.metadata.setMetadata(lodashget(response, 'metadata', {}))
    }
  })
}
