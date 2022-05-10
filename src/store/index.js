import Vue from 'vue';
import Vuex from 'vuex';
// import defaultStore from './modules/defaultStore.js'
// import getters from './getters'
import variables from '@/assets/styles/element-variables.scss'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme:variables.theme
    // theme: variables.theme
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      // console.log(state, { key, value });
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }

  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    }


  }
})