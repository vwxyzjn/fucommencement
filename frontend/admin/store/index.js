export const state = () => ({
  sidebar: false,
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'http://dev.streettraffic.org:8080'
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
