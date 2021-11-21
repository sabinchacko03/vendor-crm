require('./bootstrap');

import { createApp } from 'vue';
import router from './route.js';
import VendorsHome from './components/VendorsHome.vue';

createApp({
    components: {
        VendorsHome
    }
}).use(router).mount("#root")
