import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginError: '',
    addError: '',
    editError: '',
    products: [],
    editProduct: {}
  },
  mutations: {
    setIsLogin (state) {
      state.isLogin = true
    },
    loginError (state, payload) {
      state.loginError = payload
    },
    setProduct (state, payload) {
      state.products = payload
    },
    isLogin (state, payload) {
      state.isLogin = true
    },
    addError (state, payload) {
      state.addError = ''
      for (let a = 0; a < payload.length; a++) {
        state.addError += payload[a]
        if ((a + 1) !== payload.length) {
          state.addError += ', '
        } else {
          state.addError += '.'
        }
      }
    },
    setEditProduct (state, payload) {
      state.editProduct = payload
    },
    editError (state, payload) {
      state.editError = ''
      for (let a = 0; a < payload.length; a++) {
        state.editError += payload[a]
        if ((a + 1) !== payload.length) {
          state.editError += ', '
        } else {
          state.editError += '.'
        }
      }
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('loginError', '')
          router.push('/')
        })
        .catch((error) => {
          context.commit('loginError', error.response.data.message)
        })
    },
    fetchProduct (context, payload) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('setProduct', response.data)
        })
        .catch((error) => {
          context.commit('loginError', error.response.data.message)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          context.commit('addError', '')
          router.push('/')
        })
        .catch((error) => {
          context.commit('addError', '')
          const err = error.response.data.message
          context.commit('addError', err)
        })
    },
    showEditForm (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('setEditProduct', response.data)
          router.push('/editproduct')
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    },
    edit (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          context.commit('editError', '')
          router.push('/')
        })
        .catch((error) => {
          const err = error.response.data.message
          context.commit('editError', err)
        })
    },
    deleting (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchProduct')
          router.push('/').catch(error => error)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
