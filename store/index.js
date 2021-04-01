import navs from '../plugins/navs.js'

const state = () => {
  return {
    user: null,
    theme: 'coffee',
    typewriterText: null,
    navs: navs,
  }
}
const getters = {
  user: (state) => {
    return state.user
  },
  theme: (state) => {
    return state.theme
  },
  typewriterText: (state) => {
    return state.typewriterText
  },
  navs: (state) => {
    return state.navs
  },
}
const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  },
  setTheme: (state, payload) => {
    state.theme = payload
  },
  typewrite: (state, payload) => {
    state.typewriterText = payload
  },
}
const actions = {
  setUser: (store, payload) => {
    store.commit('setUser', payload)
  },
  setTheme: (context, payload) => {
    window.$nuxt.$colorMode.preference = payload // automatically sets item in locaStorage
    context.commit('setTheme', payload)
  },
  typewrite: (context, payload) => {
    context.commit('typewrite', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
