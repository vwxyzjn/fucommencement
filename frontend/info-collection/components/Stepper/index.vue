<template lang="pug">
  v-stepper.mt-3(v-model='e1')
    v-stepper-header
      v-stepper-step(step='1', :complete='e1 > 1' editable) About You
      v-divider
      v-stepper-step(step='2', :complete='e1 > 2' editable) Names Info
      v-divider
      v-stepper-step(step='3' :complete='e1 > 3' editable) Upload Files
      v-divider
      v-stepper-step(step='4' editable) Review and Submit
    v-stepper-items
      v-stepper-content(step='1' editable)
        StepperDirectoryInfo(:studentData="studentData").mb-5
        v-btn(color='primary', @click.native='e1 = 2') Continue
      v-stepper-content(step='2' editable)
        StepperNamesInfo(:studentData="studentData").mb-5
        v-btn(color='primary', @click.native='e1 = 3') Continue
      v-stepper-content(step='3' editable)
        StepperAttachments(:studentData="studentData").mb-5
        v-btn(color='primary', @click.native='e1 = 4') Continue
      v-stepper-content(step='4' editable)
        StepperSubmission(:studentData="studentData").mb-5
        v-btn.white--text(:loading='uploaded', @click.native="submitForm", :disabled='uploaded', color='blue-grey') submit
          v-icon(right, dark) cloud_upload

        v-btn(color='primary', @click.native='submitForm') Submit
</template>

<script>
import StepperDirectoryInfo from './StepperDirectoryInfo'
import StepperNamesInfo from './StepperNamesInfo'
import StepperAttachments from './StepperAttachments'
import StepperSubmission from './StepperSubmission'

export default {
  data () {
    return {
      e1: 1,
      uploaded: false,
      studentData: {
        name: '',
        furmanID: '',
        anticipatedCompletionDate: null,
        degreeExpected: '',
        majors: '',
        interdisciplinaryMinor: '',
        diplomaFirstName: '',
        diplomaMiddleName: '',
        diplomaLastName: '',
        hometownAndState: '',
        pronounceFirstName: '',
        pronounceMiddleName: '',
        pronounceLastName: '',
        rhymeFirstName: '',
        rhymeMiddleName: '',
        rhymeLastName: '',
        postGradAddress: '',
        postGradAddressTwo: '',
        postGradCity: '',
        postGradState: '',
        postGradPostalCode: '',
        postGradTelephone: '',
        postGradEmail: '',
        intentConfirm: '',
        namePronunciation: '',
        profilePicture: ''
      }
    }
  },
  components: {
    StepperDirectoryInfo,
    StepperNamesInfo,
    StepperAttachments,
    StepperSubmission
  },
  methods: {
    submitForm () {
      this.furmanID = parseInt(this.furmanID)
      let data = new FormData()
      Object.keys(this.studentData).forEach(key => {
        data.append(key, this.studentData[key])
      })
      let xhr = new XMLHttpRequest()

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            alert('You have submitted the form successfully')
          } else {
            alert('System failed, try again later!')
            console.log(this.responseText)
          }
        }
      })

      xhr.open('POST', this.$store.state.baseURL + '/commencementPOST')
      console.log(xhr)
      xhr.send(data)
    }
  }
}
</script>
