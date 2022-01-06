<template>
  <div>
     <p>count: {{count}}</p>
     <p>countAlias: {{ countAlias }}</p>
     <p>countPlusLocalState: {{ countPlusLocalState }}</p>
  </div>
</template>

<script lang="ts">
//https://stackoverflow.com/questions/47810218/set-data-type-in-vue-data-object-with-typescript
//https://github.com/Quramy/tsuquyomi-vue
//https://github.com/Quramy/tsuquyomi#how-to-install

import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { State, Book } from './interfaces'

export default defineComponent({
    data(): {
      book: Book
    } {
    return {
      localCount: 1 as number, 
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state: State): number {
      return state.count + this.localCount
    }
  })
});
</script>

