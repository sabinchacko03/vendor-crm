import { createRouter, createWebHistory } from "vue-router";
import VendorsHome from './components/VendorsHome.vue';
import VendorCreate from './components/VendorCreate.vue';

const routes = [
    {
        path: '/',
        name: 'vendors.index',
        component: VendorsHome
    },
    {
        path: '/vendor/create',
        name: 'vendors.create',
        component: VendorCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})