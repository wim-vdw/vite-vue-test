import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
  state() {
    return {
      titleActive: true,
    }
  },
  getters: {
    buttonText(state) {
      return !state.titleActive ? 'Show title' : 'Hide title'
    },
    buttonClass(state) {
      return state.titleActive ? 'btn btn-danger' : 'btn btn-primary'
    },
  },
  actions: {
    toggleTitle() {
      this.titleActive = !this.titleActive
    },
  },
})
