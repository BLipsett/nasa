<template>
  <form @submit.prevent="findImage">
    <input type="date" id="start" name="trip-start" v-model="state.query">
    <button>Search</button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'

export default {
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      findImage() {
        AppState.currentQuery = state.query
        nasaService.findImage()
      }
    }
  }
}

</script>
