<template>
  <v-layout row wrap>
    <v-flex xs12 class="px-3 py-2">
      <v-text-field
        name="input-1"
        label="Search student by name or furman ID"
        id="testing"
        prepend-icon="search"
        v-model="searchStore.query"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 v-for="item in searchStore.results" :key="item.objectID" class="px-3 py-2">
      <student-card :studentData="item"></student-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { Component } from 'vue-instantsearch'
import StudentCard from '@/components/StudentCard/StudentCard'
import axios from 'axios'

export default {
  mixins: [Component],
  components: {
    StudentCard
  },
  data () {
    return {
    }
  },
  created () {
    axios.defaults.baseURL = this.$store.state.baseURL
  }
}
</script>

