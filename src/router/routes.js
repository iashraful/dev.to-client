import LandingPage from "../components/view/landing/Landing";
import ArticleDetails from "../components/view/article/ArticleDetails";
import AllPosts from "../components/view/article/AllPosts";

export default [
    {
        title: 'Home',
        path: '/',
        component: LandingPage,
        hide: true
    },
    {
        title: 'Posts',
        path: '/posts',
        component: AllPosts,
        hide: false
    },
    {
        title: 'Article Details',
        path: '/posts/:id',
        component: ArticleDetails,
        hide: true
    },
]