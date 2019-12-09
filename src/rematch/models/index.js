export const dummy = {
  state: [],
  reducers: {
    pushDummy: (state, element) => [...state, element]
  },
  effects: dispatch => ({
    pushDummyAsync: async (element, rootState) => {
      if (rootState.dummy.indexOf(element) > -1) return
      dispatch.dummy.pushDummy(element)
    }
  })
}
