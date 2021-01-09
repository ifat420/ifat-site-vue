export const state = () => ({
    sidebarStatus: false
})

export const getters = {

}


export const mutations = {
    SET_SIDEBAR_STATUS (state, payload) {
        state.sidebarStatus = payload;
    }
}

export const actions = {
    setSidebar({ commit }, payload) {
        commit('SET_SIDEBAR_STATUS', payload)
    }
}