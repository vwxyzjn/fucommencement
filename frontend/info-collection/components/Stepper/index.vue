<template lang="pug">
  v-stepper.mt-3(v-model='e1').elevation-7
    v-stepper-header
      v-stepper-step(step='1', :complete='e1 > 1') About You
      v-divider
      v-stepper-step(step='2', :complete='e1 > 2') Names Info
      v-divider
      v-stepper-step(step='3' :complete='e1 > 3') Upload Files
      v-divider
      v-stepper-step(step='4') Review and Submit
    v-stepper-items
      v-stepper-content(step='1')
        StepperDirectoryInfo(:studentData="studentData" @finishStep="handleStep").mb-5
      v-stepper-content(step='2')
        StepperNamesInfo(:studentData="studentData" @finishStep="handleStep").mb-5
      v-stepper-content(step='3')
        StepperAttachments(:studentData="studentData" @finishStep="handleStep").mb-5
      v-stepper-content(step='4')
        StepperSubmission(:studentData="studentData" @finishStep="handleStep").mb-5

        

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
      studentData: {
        name: '',
        furmanID: '',
        anticipatedCompletionDate: '',
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
    handleStep (direction) {
      console.log(direction, 'xixi')
      if (direction === 'next') {
        this.e1 += 1
      } else {
        this.e1 -= 1
      }
    }
  }
}
</script>
