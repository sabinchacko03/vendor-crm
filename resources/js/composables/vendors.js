import { ref } from "vue"
import axios from "axios"
import { routerKey, useRouter } from "vue-router"

export default function useVendors() {
    const vendors = ref([])
    const router = useRouter();
    const errors = ref('');
    const vendor = ref('');

    const getVendors = async () => {
        let response = await axios.get('/api/vendors')
        vendors.value = response.data.data
    }

    const storeVendor = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/vendors', data);
            await router.push({ name: 'vendors.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyVendor = async (id) => {
        // await axios.delete('/api/vendors/' + id)
        let response = await axios.get('/api/vendors/' + id);
        vendor.value = response.data.data;
        vendor.value.status = 0;
        vendor.value.firstname = 0;
        console.log(vendor.value);
        await axios.put('/api/vendors/' + id, vendor.value)
    }


    return {
        vendors,
        getVendors,
        destroyVendor,
        storeVendor,
        errors
    }
}