new Vuex.Store({
 state :() => ({
    isAuthenticate:false
  }),
  
   getters : {
    getCounter(state) {
      return state.isAuthenticate
    }
  },
  
  mutations :{
    increment(state) {
      state.isAuthenticate = true
    }
  }

  
})  