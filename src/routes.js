import { ToyApp } from "./pages/toys-app";
import { Home } from "./pages/home-page";
import { About } from "./pages/about-page";
import { ToyEdit } from "./pages/toy-edit";
import { ToyDetails } from "./pages/toy-details";

export default [{
    path: '/',
    component: Home
}, {
    path: '/about',
    component: About
}, {
    path: '/toys',
    component: ToyApp
},
{
    path: '/toys/edit/:toyId',
    component: ToyEdit,
},
{
    path: '/toys/:toyId',
    component: ToyDetails
}]