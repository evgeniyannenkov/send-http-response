import sdk from '../sdk';
import { UPDATE_STEP_DATA, GET_INITIAL_DATA } from './mutations';

export default {
    getInitialState: async ({ commit }) => {
        const { data } = await sdk.getInitialState();
        commit(GET_INITIAL_DATA, data);
    },
    updateStepData: async ({ commit }, data) => {
        await sdk.updateStepData(data);
        commit(UPDATE_STEP_DATA, data);
    }
};
