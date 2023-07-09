// store.js
import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            history: []
        };
    },
    mutations: {
        addOperation(state, operation) {
            state.history.push(operation);
        },
        removeOperation(state, index) {
            state.history.splice(index, 1);
        }
    }
});
