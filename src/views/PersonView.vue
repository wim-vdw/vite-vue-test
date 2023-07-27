<script>
export default {
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    authenticated: {
      type: Boolean,
    },
  },
  computed: {
    fullName() {
      return `${this.lastName.toUpperCase()}, ${this.firstName}`;
    },
  },
};
</script>

<template>
  <div class="my-3">
    <h3>{{ fullName }}</h3>
    <h3 class="text-success" v-if="authenticated">Authenticated</h3>
    <h3 class="text-danger" v-else>Please authenticate</h3>
  </div>
</template>
