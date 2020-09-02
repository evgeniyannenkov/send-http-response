export const UPDATE_STEP_DATA = 'UPDATE_STEP_DATA';
export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export default {
    [UPDATE_STEP_DATA](state, data = {}) {
        state.data = {
            ...state.data,
            ...data
        };
        console.log('state', state);
    },
    [GET_INITIAL_DATA](state, initialState = {}) {
        state = Object.assign(state, initialState);
        console.log('state', state);
    }
};
