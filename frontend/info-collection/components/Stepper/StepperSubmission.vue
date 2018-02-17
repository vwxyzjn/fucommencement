<template lang="pug">
  v-form
    div
      v-checkbox(
        :label="'By checking this box, I confirm to graduate on ' + studentData.anticipatedCompletionDate + ' '"
        v-model='studentData.intentConfirm'
        :rules="[v => !!v || ' ']"
        required id="non-hidden-checkbox")

    v-btn(color='primary', @click.native="$emit('finishStep', 'back')") Back
    v-btn.white--text(:loading='uploading', @click.native="submitForm", color='blue-grey' depressed) submit
      v-icon(right, dark) cloud_upload
    v-snackbar(:timeout="2000" top right vertical v-model='uploadFinished' :color="color")
      div(v-if="color=='success'") You have successfully submitted your infomation. Thank you!
      div(v-else) Oops. Something went wrong. Try submitting again in a few hours!
      v-btn(flat='', dark, @click.native='uploadFinished = false') Close
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
      intentConfirmOptions: ['Y', 'N'],
      uploading: false,
      uploadFinished: false,
      color: ''
    }
  },
  methods: {
    submitForm () {
      let self = this
      self.uploading = true
      this.furmanID = parseInt(this.furmanID)
      let data = new FormData()
      Object.keys(this.studentData).forEach(key => {
        data.append(key, this.studentData[key])
      })
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          self.uploading = false
          self.uploadFinished = true
          console.log(this.status)
          self.color = this.status === 200 ? 'success' : 'error'
          console.log(this.responseText)
        }
      })
      xhr.open('POST', this.$store.state.baseURL + '/commencementPOST')
      console.log(xhr)
      xhr.send(data)
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

