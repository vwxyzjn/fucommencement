<template lang="pug">
  v-form
    div
      v-checkbox(
        :label="'By checking this box, I confirm to graduate on ' + studentData.anticipatedCompletionDate + ' '"
        v-model='studentData.intentConfirm'
        :rules="[v => !!v || 'You must agree to continue!']"
        required id="non-hidden-checkbox")
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

<style lang="stylus">
// fix the issue of checkbox's label being hidden
.input-group
  &.checkbox
    label
      white-space normal
      overflow visible

</style>

