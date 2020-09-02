import orUiComponents from '@onereach/ui';
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import App from './App.vue';
import store from './store';
import 'normalize.css/normalize.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'keen-ui/dist/keen-ui.css';
import '@onereach/ui/dist/or-ui.css';

Vue.use(VueCompositionApi);
Vue.use(hooks);
Vue.use(orUiComponents);

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
