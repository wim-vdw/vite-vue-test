import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

export const useUserStore = defineStore('user', {
  state() {
    return {
      firstName: 'James',
      lastName: 'Bond',
      authenticated: false,
    };
  },
});

export const useUserStore2 = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  const name = reactive({
    firstName: 'James',
    lastName: 'Bond',
  });
  const fullName = computed(() => name.lastName + ', ' + name.firstName);

  function upper() {
    name.firstName = name.firstName.toUpperCase();
    name.lastName = name.lastName.toUpperCase();
  }

  return { count, name, fullName, doubleCount, increment, decrement, upper };
});
