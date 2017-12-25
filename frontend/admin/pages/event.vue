<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <student-card :studentData="studentDataA"></student-card>
      </div>
      <div class="carousel-cell">
        <student-card :studentData="studentDataB"></student-card>
      </div>
      <div class="carousel-cell">
        <student-card :studentData="studentDataC"></student-card>
      </div>
    </flickity>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import Flickity from 'vue-flickity'
import StudentCard from '@/components/StudentCard/StudentCard'
import axios from 'axios'
import Vue from 'vue'

export default {
  data () {
    return {
      flickityOptions: {
        wrapAround: true,
        pageDots: false,
        resize: true
      },
      ranks: [0, 1, 2],
      lastRank: 0
    }
  },
  asyncComputed: {
    async studentDataA () {
      console.log(this.ranks[0])
      let response = await axios.get(`${this.$store.state.baseURL}/entryByRankGET/${this.ranks[0]}`)
      return response.data
    },
    async studentDataB () {
      let response = await axios.get(`${this.$store.state.baseURL}/entryByRankGET/${this.ranks[1]}`)
      return response.data
    },
    async studentDataC () {
      let response = await axios.get(`${this.$store.state.baseURL}/entryByRankGET/${this.ranks[2]}`)
      return response.data
    }
  },
  components: {
    Flickity,
    NoSSR,
    StudentCard
  },
  methods: {
    mod (n, m) {
      // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
      return ((n % m) + m) % m
    }
  },
  mounted () {
    let self = this
    this.$refs.flickity.on('settle', () => {
      let settledIndex = self.$refs.flickity.selectedIndex()
      let settledRank = self.ranks[settledIndex]
      console.log('settledIndex' + settledIndex)
      console.log('settledRank' + settledRank)
      // handle forward
      if (settledRank > self.lastRank) {
        Vue.set(self.ranks, self.mod(settledIndex + 1, 3), settledRank + 1)
        // self.ranks[self.mod(settledIndex + 1, 3)] = settledRank + 1
        self.lastRank += 1
      } else { // handle backward
        // self.ranks[self.mod(settledIndex - 1, 3)] = settledRank + 1
        Vue.set(self.ranks, self.mod(settledIndex - 1, 3), settledRank - 1)
        self.lastRank -= 1
      }
      console.log(this.ranks)
    })
  },
  created () {
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 100%;
  margin-left: 4rem;
}
</style>

