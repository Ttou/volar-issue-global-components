<template>
  <h2 class="welcome">{{ msg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Welcome',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.welcome {
  font-size: 36px;
  color: #333;
}
</style>
