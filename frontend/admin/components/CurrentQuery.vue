<template>
  <div>
    <div>
      {{ query }}
    </div>
    <div>
      {{ xixi }}
    </div>
  </div>
</template>

<script>
import { Component } from 'vue-instantsearch'

export default {
  mixins: [Component],
  computed: {
    query () {
      console.log(this.searchStore)
      return this.searchStore.query
    },
    xixi () {
      return this.searchStore.results
    }
  }
}
</script>