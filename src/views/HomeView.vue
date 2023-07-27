<script>
import PersonView from './PersonView.vue';
import { useUserStore } from '../stores/user.js';
import { mapState, mapWritableState } from 'pinia';

export default {
  components: {
    PersonView,
  },
  computed: {
    ...mapState(useUserStore, ['firstName']),
    ...mapWritableState(useUserStore, {
      achternaam: 'lastName',
      authenticated: 'authenticated',
    }),
  },
};
</script>

<template>
  <div class="my-3">
    <PersonView
      v-bind:last-name="achternaam"
      v-bind:first-name="firstName"
      v-bind:authenticated="authenticated"
    >
    </PersonView>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="authenticated"
        id="authenticated"
      />
      <label class="form-check-label" for="authenticated">
        Authenticated
      </label>
    </div>
  </div>
</template>
