<template>
  <h1>Image will be here</h1>

  <img :src="state.nasaImage.image" />
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {

  setup() {
    const state = reactive({
      nasaImage: computed(() => AppState.nasaImage)
    })
    return {
      state
    }
  }
}
</script>
