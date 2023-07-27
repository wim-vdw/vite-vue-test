import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      firstName: 'Wim',
      lastName: 'Van den Wyngaert',
      authenticated: false,
    };
  },
});
