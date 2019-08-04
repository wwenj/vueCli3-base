export default {
  state: {
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SETUSER (state, data) {
      state.user = data
    }
  },
  actions: {
    setId (store, data) {
      store.commit('SETUSER', data)
    }
  }

}
