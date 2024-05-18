<script setup>
import { ref, reactive, onMounted } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}

const name = reactive({
  firstName: 'Wim',
  lastName: 'Van den Wyngaert',
});

onMounted(() => {
  setTimeout(() => {
    name.firstName = name.firstName.toUpperCase();
    name.lastName = name.lastName.toUpperCase();
  }, 3000);
});
</script>

<template>
  <div class="my-3">
    <p>
      Counter: {{ counter }}
      <button class="btn btn-primary me-3" @click.prevent="increment">
        Increase counter
      </button>
      <button class="btn btn-primary me-3" @click.prevent="decrement">
        Decrease counter
      </button>
    </p>
    <p>First Name: {{ name.firstName }}</p>
    <p>Last Name: {{ name.lastName }}</p>
  </div>
</template>

<style scoped>
h1 {
  background: red;
}
</style>
