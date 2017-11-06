export const state = () => ({
  sidebar: false,
  baseURL: 'http://dev.streettraffic.org:3000'
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
