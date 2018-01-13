<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div v-for="(dummy, index) in numStudentCards" :key="dummy" class="carousel-cell">
        {{index}}
        <student-card :studentData="studentDataCollection[index]"></student-card>
      </div>
    </flickity>
  </div>
</template>

<script>
import _ from 'lodash'
import Flickity from 'vue-flickity'
import StudentCard from '@/components/StudentCard/StudentCard'
import axios from 'axios'
import Vue from 'vue'

export default {
  props: {
    numStudentCards: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      flickityOptions: {
        wrapAround: true,
        pageDots: false,
        resize: true
      },
      ranks: _.range(this.numStudentCards - 1).concat([-1]), // I am sorry for this hack, but basically, you should start off with [0,1,2, ..., -1] so that if you swipe left, you will get a warning message.
      lastRank: 0,
      studentDataCollection: new Array(this.numStudentCards)
    }
  },
  components: {
    Flickity,
    StudentCard
  },
  methods: {
    async entryByRankGET (n) {
      try {
        let response = await axios.get(`${this.$store.state.baseURL}/entryByRankGET/${n}`)
        return response.data
      } catch (error) {
        return null
      }
    },
    mod (n, m) {
      // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
      return ((n % m) + m) % m
    }
  },
  mounted () {
    let self = this
    this.$refs.flickity.on('settle', async () => {
      let settledIndex = self.$refs.flickity.selectedIndex()
      let settledRank = self.ranks[settledIndex]
      console.log('settledIndex' + settledIndex)
      console.log('settledRank' + settledRank)
      // handle forward
      if (settledRank > self.lastRank) {
        let r = self.mod(settledIndex + 1, this.numStudentCards)
        self.ranks[r] = settledRank + 1
        Vue.set(this.studentDataCollection, r, await this.entryByRankGET(settledRank + 1))
        self.lastRank += 1
      } else { // handle backward
        let r = self.mod(settledIndex - 1, this.numStudentCards)
        self.ranks[r] = settledRank - 1
        Vue.set(this.studentDataCollection, r, await this.entryByRankGET(settledRank - 1))
        self.lastRank -= 1
      }
      console.log(this.ranks)
    })
  },
  async created () {
    // When created, initialize this.studentDataCollection
    this.ranks.forEach(async r => {
      Vue.set(this.studentDataCollection, r, await this.entryByRankGET(r))
    })
    console.log(this.studentDataCollection)
    console.log(this.ranks)
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 100%;
  margin-left: 4rem;
}
</style>