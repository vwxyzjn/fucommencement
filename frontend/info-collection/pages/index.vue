<template lang="pug">
  v-layout(row wrap justify-center)
    v-flex(xs12 sm10)
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
