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

export const cart = {
  state: null,
  reducers: {
    addToCart: (state, product) => ({
      ...state,
      [product.id]: { ...product, quantity: 1 }
    }),
    increaseProduct: (state, productId) => ({
      ...state,
      [productId]: {
        ...state[productId],
        quantity: state[productId].quantity + 1
      }
    }),
    decreaseProduct: (state, productId) => ({
      ...state,
      [productId]: {
        ...state[productId],
        quantity: state[productId].quantity - 1
      }
    }),
    removeFromCart: (state, productId) => ({
      ...state,
      [productId]: undefined
    })
  },
  effects: dispatch => ({
    addToCartEffect: async (product = {}, rootState) => {
      dispatch.cartModal.toggleBlackCoverAndCartModal(true)
      if (
        !product.id ||
        lodashget(rootState, `cart[${product.id}].quantity`, 0) > 0
      ) {
        return
      }
      dispatch.cart.addToCart(product)
    }
  })
}
