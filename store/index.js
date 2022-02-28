export const state =() => ({
    authorize: {
        user: "nick",
        pwd: "nick"
    },
    onAuth: false
    // onAuth: false
})
export const getters = {
    getauth: state => state.onAuth
}
export const mutations = {
    checkPwd(state,{login, pwd}) {
        if (state.authorize.user === login && state.authorize.pwd === pwd) {
            state.onAuth = true;
            // return true;
        // } else {
        //     return false;
        }
    }
}