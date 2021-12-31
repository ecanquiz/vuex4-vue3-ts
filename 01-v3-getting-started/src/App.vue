<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: "Hello world"
    }
  },
  mounted(): void {
    this.increment();
  },
  methods: {
    increment(): void {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
});

</script> 

