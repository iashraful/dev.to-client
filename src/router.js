import Vue from 'vue'
import Router from 'vue-router'
import {urls} from './constants'
import Home from './views/Home.vue'
import PostListView from "./views/posts/PostListView";
import PostDetailsView from "@/views/posts/PostDetailsView";

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
      component: () => import('@/views/posts/PostListView.vue')
    },
    {
      path: urls.postList + '/:slug',
      name: 'post_details',
      component: () => import('@/views/posts/PostDetailsView.vue')
    },
  ]
})
