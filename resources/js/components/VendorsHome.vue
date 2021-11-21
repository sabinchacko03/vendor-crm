<template>
  <div class="container">
    <div class="row m-3">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Number of Vendor Adds</h5>
            <p class="cart">{{ vendors.length }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-text">Number of Vendor Deletes</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-tite">Total Payment Received</h5>
            <p class="cart">{{ totalAmount }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'vendors.create' }" class="btn btn-primary"
            >New Vendor</router-link
          >
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Vendor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Amount Received</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in vendors" :key="item.id">
              <tr>
                <td>{{ item.firstname + " " + item.lastname }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.amount }}</td>
                <td>
                  <button
                    @click="deleteVendor(item.id)"
                    class="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import useVendors from "../composables/vendors";
import { onMounted } from "vue";

export default {
  setup() {
    const { vendors, getVendors, destroyVendor } = useVendors();

    onMounted(getVendors);

    const deleteVendor = async (id) => {
      if (!window.confirm("Are you sure to delete?")) {
        return;
      }
      await destroyVendor(id);
      getVendors();
    };

    return {
      vendors,
      deleteVendor
    };
  },
};
</script>
