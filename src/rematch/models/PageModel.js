export const page = {
  state: {
    showBlackCover: false
  },
  reducers: {
    toggleBlackCover: (state, showBlackCover) => ({ ...state, showBlackCover })
  }
}

export const cartModal = {
  state: false,
  reducers: {
    toggleCartModal: (_, showCartModal) => showCartModal
  },
  effects: dispatch => ({
    toggleBlackCoverAndCartModal: async show => {
      dispatch.page.toggleBlackCover(show)
      dispatch.cartModal.toggleCartModal(show)
    }
  })
}
