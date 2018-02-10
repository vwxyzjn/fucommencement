<template lang="pug">
  v-layout(row wrap justify-center)
    v-flex(xs12 sm10)
      v-card.my-3.elevation-12
        v-card-media.deep-purple.white--text
          span.headline.my-4.ml-4 Furman University Commencement Form
        v-card-text
          stepper

</template>

<script>
import mobileCheck from '@/plugins/mobileCheck'
import Stepper from '@/components/Stepper'

export default {
  components: {
    Stepper
  },
  created () {
    if (process.browser) {
      console.log(mobileCheck())
    }
  }
}
</script>
