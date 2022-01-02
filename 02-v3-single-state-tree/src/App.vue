<template>
  <div>
    {{ count }}
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    count () :number {
      return this.$store.state.count
    }
  }
});
 
</script>
