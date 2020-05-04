import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import todos from './modules/todos';
import email from './modules/email';

export default new Vuex.Store({
    strict: true,
    modules: {
        user,
        email,
        todos,
    },
});
