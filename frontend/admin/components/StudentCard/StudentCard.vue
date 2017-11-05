<template>
  <v-card>
    <v-card-media :src="encodeURI('http://localhost:8080'+studentData.profilePicturePath)" height="200px">
    </v-card-media>
    <v-card-text >
      <div>
        <h3 class="headline mb-0">{{ studentData.name }}</h3>
        <v-divider class="my-3"></v-divider>
        <div>Furman ID: {{ studentData.furmanID }}</div>
        <div>{{ studentData.namePronunciationPath }}</div>
        <div>
          <audio controls>
            <source :src="encodeURI('http://localhost:8080'+studentData.namePronunciationPath)" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <edit-form :studentData="studentData"></edit-form>
      <v-btn flat color="error" @click="deleteEntry(studentData.objectID)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
import { Component } from 'vue-instantsearch'
import EditForm from './EditForm'

export default {
  props: {
    studentData: Object
  },
  mixins: [Component],
  components: {
    EditForm
  },
  methods: {
    deleteEntry (objectID) {
      let self = this
      axios.get('/deleteEntryGET/' + objectID).then(
        response => {
          console.log(response)
          console.log(self.searchStore)
          setTimeout(() => {
            self.searchStore.clearCache()
            self.searchStore.refresh()
          }, 2000)
        }
      )
    }
  }
}
</script>

