<script>
import { useUserStore } from '../stores/user.js';
import InputForm from '../components/InputForm.vue';

export default {
  components: {
    InputForm,
  },
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      firstNameValid: true,
      lastNameValid: true,
    };
  },
  created() {
    this.resetForm();
  },
  methods: {
    updateUser() {
      if (this.firstNameValid && this.lastName) {
        this.userStore.firstName = this.firstName;
        this.userStore.lastName = this.lastName;
        this.$router.push('/');
      }
    },
    validateFirstName() {
      this.firstNameValid = this.firstName !== 'Wim';
    },
    validateLastName() {
      this.lastNameValid = this.lastName !== '';
    },
    resetForm() {
      this.firstNameValid = true;
      this.lastNameValid = true;
      this.firstName = this.userStore.firstName;
      this.lastName = this.userStore.lastName;
    },
  },
};
</script>

<template>
  <InputForm>
    <template v-slot:title>
      <h3>Input form for users</h3>
    </template>

    <template v-slot:fields>
      <div class="my-3">
        <div class="position-relative">
          <label for="first" class="form-label">First name:</label>
          <input
            type="text"
            class="form-control mb-3"
            :class="{ 'is-invalid': !firstNameValid }"
            id="first"
            @keyup="validateFirstName"
            v-model.trim="firstName"
          />
          <div class="invalid-tooltip">First name must be Wim.</div>
        </div>
        <div class="position-relative">
          <label for="last" class="form-label">Last name:</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': !lastNameValid }"
            id="last"
            @blur="validateLastName"
            @keyup="validateLastName"
            v-model.trim="lastName"
          />
          <div class="invalid-tooltip">Last name is a mandatory field.</div>
        </div>
      </div>
    </template>

    <template v-slot:buttons>
      <button
        @click.prevent="updateUser"
        type="submit"
        class="btn btn-primary"
        :disabled="!lastNameValid || !firstNameValid"
      >
        Update
      </button>
      <button @click.prevent="resetForm" class="btn btn-warning ms-3">
        Reset form
      </button>
    </template>
  </InputForm>
</template>
