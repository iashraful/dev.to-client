import Vue from 'vue'
import Router from 'vue-router'
import {urls} from './constants'
import Home from './views/Home.vue'
import PostListView from "./views/PostListView";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: urls.postList,
      name: 'posts',
      component: PostListView
    },
  ]
})
