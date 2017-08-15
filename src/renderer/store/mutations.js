export default {
    'CHANGE_USER'(state, payload) {
        state.user = payload
        state.appname = payload.name        
    },
    'SET_APPNAME'(state, payload) {
        state.appname = payload
    }
}