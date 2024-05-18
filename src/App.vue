<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  data() {
    return {
      version: '2.3',
    };
  },
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar v-bind:version="version" />
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>
