export default {
    changeUser(context, payload) {
        context.commit('CHANGE_USER', payload)
    },
    setAppname(context, payload) {
        context.commit('SET_APPNAME', payload)
    }
}