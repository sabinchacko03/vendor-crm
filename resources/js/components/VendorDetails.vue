<template>
  <div class="container m-3 d-flex justify-content-center">
    <div class="card w-75 text-center">
      <div class="card-header">Detail View</div>
      <div class="card-body">
        <h5 class="card-title">Personal Details</h5>
        <p>Full Name : {{ vendor.firstname + " " + vendor.lastname }}</p>
        <p>Gender : {{ vendor.gender }}</p>
        <p>Email : {{ vendor.email }}</p>
        <p>Company Name : {{ vendor.company }}</p>
        <p>Amount Received: {{ vendor.amount }}</p>
      </div>
      <div class="card-footer">
        <router-link class="btn btn-primary" :to="{ name: 'vendors.home' }"
          >Back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import useVendors from "../composables/vendors";
export default {
  props: {
    id: {
      requires: true,
      type: String,
    },
  },

  setup(props) {
    const { vendor, getVendor } = useVendors();

    onMounted(getVendor(props.id));

    return {
      vendor,
    };
  },
};
</script>