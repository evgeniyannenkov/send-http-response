import get from 'lodash/get';

export default {
    getStepData: state => {
        return get(state, 'data', {});
    }
};
