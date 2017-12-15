export const state = () => ({
  sidebar: false,
  baseURL: 'http://localhost:8080'
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
