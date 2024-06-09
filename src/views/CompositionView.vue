<script setup>
import { onMounted } from 'vue';
import { useUserStore2 } from '@/stores/user';

const store = useUserStore2();

onMounted(() => {
  setTimeout(() => {
    store.upper();
  }, 3000);
});
</script>

<template>
  <div class="my-3">
    <h3>Counter: {{ store.count }}</h3>
    <p>
      <button class="btn btn-primary me-3" @click="store.increment">
        Increase counter
      </button>
      <button class="btn btn-primary me-3" @click="store.decrement">
        Decrease counter
      </button>
      <button class="btn btn-primary me-3" @click="store.addCounterToList">
        Add counter to list
      </button>
      <button class="btn btn-primary me-3" @click="store.clearCounterList()">
        Clear list
      </button>
    </p>
    <p>First Name: {{ store.name.firstName }}</p>
    <p>Last Name: {{ store.name.lastName }}</p>
    <h1>{{ store.fullName }}</h1>
    <ul>
      <li v-for="(counter, index) in store.counterList" :key="index">
        {{ counter }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  text-shadow:
    1px 1px 2px black,
    0 0 25px blue,
    0 0 5px darkblue;
}
</style>
