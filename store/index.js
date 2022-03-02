export const state =() => ({
    pages: [
        {
        page: "auth",
        title: "Добро пожаловать!",
        message: "Пожалуйста, войдите в свой профиль"
        },
        {
        page: "changepsw",
        title: "Сменить пароль",
        message: "Введите новый пароль..."
        }
    ],
    authorize: {
        user: "nick",
        pwd: "nick"
    },
    onAuth: false
    // onAuth: false
})
export const getters = {
    getauth: state => state.onAuth,
    getInfopage: state => page => {
        state.pages.forEach(el => {
            if (el.page === page) return el;
            else return "error";
        });
    }
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