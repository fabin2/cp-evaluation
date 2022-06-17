import { createStore } from 'vuex'

export default createStore({
  state: {
    datas:[],
  },
  getters: {
  },
  mutations: {
    updateData (state,data){
      state.datas = data;
    },
    addingUser (state,newUser){
      console.log("user: " , newUser);
      state.datas.splice(state.datas.length , 0, newUser) 
    }
  },
  actions: {
  },
  modules: {
  }
})
