<template>
  <div>
    <div class="main-carousel">
      <div v-for="(dummy, index) in numStudentCards" :key="dummy" class="carousel-cell">
        <student-card :studentData="studentDataCollection[index]"></student-card>
      </div>
    </div>
  </div>
</template>

<script>
/* 
I would like to speak to you about my construction about this componenet. Basically,
the user will only see the ``View`` card as shown below. Whenever the user swipe the card,
the component will use the code in ``mounted()`` to 
  (1) find out which card to update by using ``mod(n,m)``
  (2) update the ``rank`` for each card
  (3) use ``entryByRankGET(n)`` to fetch the corresponding data

card: 1   card:  2  card:  3
index:0   index: 1  index: 2
rank: a   rank:  b  rank:  c
--------  --------  --------
|      |  |      |  |      |
|      |  | View |  |      |
|      |  |      |  |      |
--------  --------  --------

Good luck, have fun if you happen to be maintaining my code
*/

import _ from 'lodash'
import StudentCard from '@/components/StudentCard/StudentCard'
import axios from 'axios'
import Vue from 'vue'
if (process.browser) {
  var Flickity = require('flickity')
  console.log(Flickity)
}

export default {
  props: {
    numStudentCards: {
      type: Number,
      default: 3
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
      studentDataCollection: new Array(this.numStudentCards),
      currentIndex: 0,
      flkty: null
    }
  },
  components: {
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
    },
    initliaze () {
      this.flkty = new Flickity('.main-carousel', this.flickityOptions)
      console.log(this)
      // When created, initialize this.studentDataCollection
      this.ranks.forEach(async r => {
        Vue.set(this.studentDataCollection, r, await this.entryByRankGET(r))
      })
      // reposition at load to fix weird position bug
      this.flkty.reposition()
      this.flkty.reloadCells()
      let self = this
      this.flkty.on('scroll', async () => {
        let settledIndex = self.flkty.selectedIndex
        let settledRank = self.ranks[settledIndex]
        // don't call the api if the index hasn't changed
        if (settledIndex === this.currentIndex) {
          return
        } else {
          this.currentIndex = settledIndex
        }
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
      })
    }
  },
  mounted () {
    if (process.browser) {
      setTimeout(this.initliaze(), 300)  // if I don't do this, some weird bugs appear
    }
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 80%;
  margin-left: 4rem;
}
</style>