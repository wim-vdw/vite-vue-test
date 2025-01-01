import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useUserStore1 = defineStore('user1', {
  state() {
    return {
      firstName: 'James',
      lastName: 'Bond',
      authenticated: false,
    }
  },
})

export const useUserStore2 = defineStore('user2', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  const name = reactive({
    firstName: 'James',
    lastName: 'Bond',
  })
  const fullName = computed(() => name.lastName + ', ' + name.firstName)

  function upper() {
    name.firstName = name.firstName.toUpperCase()
    name.lastName = name.lastName.toUpperCase()
  }

  const counterList = ref([])

  function addCounterToList() {
    counterList.value.push(count.value)
  }

  function clearCounterList() {
    counterList.value = []
  }

  return {
    count,
    name,
    fullName,
    doubleCount,
    counterList,
    increment,
    decrement,
    upper,
    addCounterToList,
    clearCounterList,
  }
})
