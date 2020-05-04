export default {

    state: {
        error: false,
        todos: [],

    },
    mutations: {
        SET_ERROR(state) {
            state.error = true;
        },

        SET_TODO(state, value) {
            state.todos.push(value)
            state.error = false;
        },

        DELETE_TODO(state, index) {
            state.todos.splice(index, 1)
        }
    },
    actions: {
        add({commit}, value) {
            if (!value) {
                commit('SET_ERROR')
            } else
                commit('SET_TODO', value)
        },

        remove({commit}, index) {
            commit('DELETE_TODO', index)
        }
    },
    getters: {
        todos: state => state.todos,
    }
}
