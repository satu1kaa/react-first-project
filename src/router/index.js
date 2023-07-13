import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from "../pages/PostIdPage";


export const routes = [
    { path: '/about', component: About, element: true},
    { path: '/posts', component: Posts, element: true},
    { path: '/posts/:id', component: PostIdPage, element: true},
]