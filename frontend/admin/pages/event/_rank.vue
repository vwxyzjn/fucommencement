<template>
  <div v-touch="{
    left: () => swipe(1),
    right: () => swipe(-1)
  }">
    <student-card :studentData="studentData"></student-card>
  </div>
</template>

<script>
import axios from 'axios'
import StudentCard from '@/components/StudentCard/StudentCard'

export default {
  components: {
    StudentCard
  },
  asyncComputed: {
    async studentData () {
      let response = await axios.get(`${this.$store.state.baseURL}/entryByRankGET/${this.$route.params.rank}`)
      return response.data
    }
  },
  methods: {
    swipe (n) {
      let newRank = parseInt(this.$route.params.rank) + n
      console.log(newRank)
      this.$router.push(`/event/${newRank}`)
    }
  }
}
</script>
