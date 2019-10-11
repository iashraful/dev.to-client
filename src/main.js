import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './styles/main.scss'

Vue.use(Buefy);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next()
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
