import { createRouter, createWebHistory } from "vue-router";
import VendorsHome from "./components/VendorsHome.vue";
import VendorCreate from "./components/VendorCreate.vue";
import VendorDetails from "./components/VendorDetails.vue";

const routes = [
    {
        path: "/",
        name: "vendors.home",
        component: VendorsHome,
    },
    {
        path: "/vendor/create",
        name: "vendors.create",
        component: VendorCreate,
    },
    {
        path: "/vendor/:id/view",
        name: "vendors.view",
        component: VendorDetails,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
