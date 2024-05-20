<script>
import { useTitleStore } from '@/stores/title';

export default {
  setup() {
    const titleStore = useTitleStore();

    return { titleStore };
  },
};
</script>

<template>
  <div class="my-3">
    <h1 v-if="titleStore.titleActive" class="my-3">About page</h1>
    <button
      class="me-3"
      :class="titleStore.buttonClass"
      @click="titleStore.toggleTitle"
    >
      {{ titleStore.buttonText }}
    </button>
    <button class="btn btn-primary me-3" @click="$router.push('invalid')">
      Invalid route
    </button>
  </div>
</template>
