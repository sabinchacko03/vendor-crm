<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="alert alert-danger" v-if="errors !== ''">
          <template v-for="item in errors" :key="item">
            <li>{{ item[0] }}</li>
          </template>
        </div>

        <form class="mt-2" @submit.prevent="saveVendor">
          <div class="mb-3">
            <label for="firstname" class="form-label">Firstname</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              name="firstname"
              v-model="form.firstname"
            />
          </div>
          <div class="mb-3">
            <label for="middlename" class="form-label">Middle Name</label>
            <input
              type="text"
              class="form-control"
              id="middlename"
              name="middlename"
              v-model="form.middlename"
            />
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              name="lastname"
              v-model="form.lastname"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              v-model="form.email"
            />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select
              name="gender"
              id="gender"
              v-model="form.gender"
              class="form-select"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">Company</label>
            <input
              type="text"
              class="form-control"
              id="company"
              name="company"
              v-model="form.company"
            />
          </div>
          <div class="mb-3">
            <label for="amount" class="form-label">Received Amount</label>
            <select
              name="amount"
              id="amount"
              class="form-select"
              v-model="form.amount"
            >
              <option value="10000">10,000</option>
              <option value="10000">20,000</option>
              <option value="10000">30,000</option>
            </select>
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Save</button>
            <router-link
              class="btn btn-secondary mx-2"
              :to="{ name: 'vendors.home' }"
              >Back</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import useVendors from "../composables/vendors";

export default {
  setup() {
    const form = reactive({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      gender: "",
      company: "",
      amount: "",
      status: 1,
    });

    const { storeVendor, errors } = useVendors();
    const saveVendor = async () => {
      await storeVendor({ ...form });
    };
    return {
      form,
      errors,
      saveVendor,
    };
  },
};
</script>
