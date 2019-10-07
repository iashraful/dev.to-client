import LandingPage from "../components/view/landing/Landing";
import ArticleDetails from "../components/view/article/ArticleDetails";

export default [
    {
        title: 'Home',
        path: '/',
        component: LandingPage,
        hide: true
    },
    {
        title: 'Article Details',
        path: '/posts/:id',
        component: ArticleDetails,
        hide: true
    },
]