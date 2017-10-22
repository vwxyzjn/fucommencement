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
      <v-card>
        <v-card-media :src="encodeURI('http://localhost:8080'+item.profilePicturePath)" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ item.name }}</h3>
            <div>Furman ID: {{ item.furmanID }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { Component } from 'vue-instantsearch'

export default {
  mixins: [Component],
  data () {
    return {
      searchString: ''
    }
  }
}
</script>

