<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: "Hello world"
    }
  },
  mounted() {
    this.increment();
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
};

</script> 

