export default {

    state: {
        user: '',
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
    },

    actions: {
        loadUser({commit}) {
            axios
                .get('/user')
                .then(response => response.data)
                .catch(error => {
                    console.log(error);
                }).then(user => {
                commit('SET_USER', user)
            })
        }
    },

    getters: {
        user: state => state.user,
    }
}

