import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
// Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.devtools = true;

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        data: {
            outputData:
                '{\n\t"method": "",\n\t"path": "",\n\t"request": {\n\t\t"method": "",\n\t\t"headers": {\n\t\t\t"x-next-method": "", \n\t\t\t"x-next-url":""\n\t\t},\n\t\t"queryParams": {},\n\t\t"body": {}\n\t}\n}',
            headers: [],
            attachments: [],
            code: '200',
            useFiles: false,
            fileLocation: '',
            body: '{}',
            typeResponse: 'body',
            isWaitForAnotherRequest: false,
            bodyOutputData: '{}',
            contentType: "'application/json'",
            isRequestBody: true
        },
        dataOuts: [],
        isNew: true,
        readonly: true
    },
    mutations,
    actions,
    getters
});
