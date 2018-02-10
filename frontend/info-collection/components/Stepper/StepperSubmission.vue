<template lang="pug">
  v-form
    v-select(:items="intentConfirmOptions", v-model="studentData.intentConfirm", label="Intent Confirm" dark, item-value="text")
</template>

<script>
export default {
  props: {
    studentData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      intentConfirmOptions: ['Y', 'N']
    }
  }
}
</script>

