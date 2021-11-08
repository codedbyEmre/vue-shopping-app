import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    card: []
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    }
  },
  actions: {
    getProductsAction({commit}){
      axios('https://fakestoreapi.com/products').then(res => {
        commit('getProducts', res.data)
      })
    }
  },
  modules: {
  }
})
