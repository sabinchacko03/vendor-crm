import { ref } from "vue";
import axios from "axios";
import { routerKey, useRouter } from "vue-router";

export default function useVendors() {
    const vendors = ref([]);
    const router = useRouter();
    const errors = ref("");
    const vendor = ref("");
    const inactiveVendors = ref([]);
    const totalAmount = ref('');

    const getVendors = async () => {
        let response = await axios.get("/api/vendors");
        vendors.value = response.data.data;
    };

    const getVendor = async (id) => {
        let response = await axios.get("/api/vendors/" + id);
        vendor.value = response.data.data;
    };

    const storeVendor = async (data) => {
        errors.value = "";
        try {
            await axios.post("/api/vendors", data);
            await router.push({ name: "vendors.home" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyVendor = async (id) => {
        const delData = { id: id, status: 0 };
        let response = await axios.post("/api/deactivate", delData);
    };

    const getInactiveVendors = async()=>{
        let response= await axios.get("/api/inactive-vendors")
        inactiveVendors.value = response.data.data;
    }

    const getTotalAmount = async()=>{
        let response= await axios.get("/api/total-amount")
        totalAmount.value = response.data;
    }

    return {
        vendors,
        getVendors,
        destroyVendor,
        storeVendor,
        errors,
        vendor,
        getVendor,
        getInactiveVendors,
        inactiveVendors,
        getTotalAmount,
        totalAmount
    };
}
