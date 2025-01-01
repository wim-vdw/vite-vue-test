<script>
import { StarwarsClient } from '@/services/StarwarsService'

export default {
  data() {
    return {
      baseURL: 'https://swapi.dev/api',
      endpoint: '/people/1/',
      result: '',
      disabled: false,
      activeColor: '',
    }
  },
  methods: {
    async executeAPI() {
      this.disabled = true
      const starwarsClient = new StarwarsClient(this.baseURL)
      const response = await starwarsClient.callAPI(this.endpoint)
      if (response.status === 'OK') {
        this.activeColor = 'green'
        this.result = response.data
      } else {
        this.activeColor = 'red'
        this.result = response.error.message
      }
      this.disabled = false
    },
  },
}
</script>

<template>
  <div class="my-3">
    <div class="mb-3">
      <label for="baseURM" class="form-label">Base URL</label>
      <input type="text" class="form-control" id="baseURL" v-model="baseURL" />
    </div>
    <div class="mb-3">
      <label for="endpoint" class="form-label">Endpoint</label>
      <input type="text" class="form-control" id="endpoint" v-model="endpoint" />
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" v-on:click="executeAPI" v-bind:disabled="disabled">
        Execute API
      </button>
    </div>
    <div>Result:</div>
    <p :style="{ color: activeColor }">{{ result }}</p>
  </div>
</template>
