import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import Buefy from 'buefy'
import VueDisqus from 'vue-disqus'
import 'buefy/dist/buefy.css'
import './styles/main.scss'

import userConfig from '@/utils/user-config-parser'

Vue.use(Buefy);
Vue.use(VueDisqus);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = userConfig.getUserDataConfig().blog_title;
    next()
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
