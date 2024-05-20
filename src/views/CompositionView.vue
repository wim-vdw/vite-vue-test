<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}

const name = reactive({
  firstName: 'James',
  lastName: 'Bond',
});

const fullName = computed(() => {
  return name.lastName + ', ' + name.firstName;
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
    <h1>{{ fullName }}</h1>
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
