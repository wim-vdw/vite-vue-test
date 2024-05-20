import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      firstName: 'James',
      lastName: 'Bond',
      authenticated: false,
    };
  },
});
