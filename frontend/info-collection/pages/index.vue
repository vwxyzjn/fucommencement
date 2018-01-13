<template lang="pug">
  v-layout(row wrap justify-center)
    v-flex(xs12 sm10)
      v-card.my-3
        v-card-media.deep-purple.white--text
          span.headline.my-4.ml-4 Please fill in the following form
                
        v-card-text
          v-layout(row wrap justify-content-center)
            v-flex(xs12 sm6).px-3
              v-form
                v-text-field(label="Name" v-model="studentData.name", required)
                v-text-field(label="Furman ID" v-model="studentData.furmanID" required)
              
                v-dialog(persistent v-model="anticipatedCompletionDateModal" lazy full-width)
                  v-text-field(slot="activator", label="Please select a date", v-model="studentData.anticipatedCompletionDate", readonly, required)
                  v-date-picker(v-model="studentData.anticipatedCompletionDate", scrollable dark)
                    template(scope="{ save, cancel }")
                      v-card-actions
                        v-btn.green--text.darken-1( flat @click.native="cancel()") Cancel
                        v-btn.green--text.darken-1( flat @click.native="save()") Save
                
                v-select(:items="degreeExpectedOptions", v-model="studentData.degreeExpected", label="Select the degree expected" dark, item-value="text", required)
                v-text-field(label="Major(s)" v-model="studentData.majors" required)
                v-text-field(label="Interdisciplinary Minor(s) " v-model="studentData.interdisciplinaryMinor" required)
                v-text-field(label="Diploma First Name" v-model="studentData.diplomaFirstName" required)
                v-text-field(label="Diploma Middle Name" v-model="studentData.diplomaMiddleName" required)
                v-text-field(label="Diploma Last Name" v-model="studentData.diplomaLastName" required)
                v-text-field(label="Hometown and State" v-model="studentData.hometownAndState" required)
                v-text-field(label="Pronounce First Name" v-model="studentData.pronounceFirstName" required)
                v-text-field(label="Pronounce Middle Name" v-model="studentData.pronounceMiddleName" required)
                v-text-field(label="Pronounce Last Name" v-model="studentData.pronounceLastName" required)
            
            v-flex(xs12 sm6).px-3
              v-form
                v-text-field(label="Rhyme First Name" v-model="studentData.rhymeFirstName" required)
                v-text-field(label="Rhyme Middle Name" v-model="studentData.rhymeMiddleName" required)
                v-text-field(label="Rhyme Last Name" v-model="studentData.rhymeLastName" required)
                v-text-field(label="Post-Grad Address" v-model="studentData.postGradAddress" required)
                v-text-field(label="Post-Grad Address Two" v-model="studentData.postGradAddressTwo" required)
                v-text-field(label="Post-Grad City" v-model="studentData.postGradCity" required)
                v-text-field(label="Post-Grad State" v-model="studentData.postGradState" required)
                v-text-field(label="Post-Grad Postal Code" v-model="studentData.postGradPostalCode" required)
                v-text-field(label="Post-Grad Telephone" v-model="studentData.postGradTelephone" required)
                v-text-field(label="Post-Grad Email" v-model="studentData.postGradEmail" required)
                v-dialog(v-model="namePronunciationModal" lazy full-width)
                  v-text-field(slot="activator", label="Upload Name Pronunciation", :value="studentData.namePronunciation ? 'Name Pronunciation uploaded' : ''", readonly)
                  v-card
                    v-card-title
                      .headline Please upload your name pronunciation
                    v-card-text
                      p you can either upload a video or sound file
                      
                    v-card-actions
                      v-spacer
                      upload-button(title="Upload Name Pronunciation" :selectedCallback="namePronunciationUpload").ml-0

                v-dialog(v-model="profilePictureModal" lazy full-width)
                  v-text-field(slot="activator", label="Please Upload Profile Picture", :value="studentData.profilePicture ? 'Profile Picture uploaded': '' ", readonly, required)
                  v-card
                    v-card-title
                      .headline Please upload your profile picture
                    v-card-text
                      p you may upload JPEG, PNG, and JPG.

                    v-card-actions
                      v-spacer
                      upload-button(title="Upload Profile Picture" :selectedCallback="profilePictureUpload").ml-0

                v-select(:items="intentConfirmOptions", v-model="studentData.intentConfirm", label="Intent Confirm" dark, item-value="text")

          

        v-card-actions
          v-spacer
          v-btn(primary @click="submitForm") Submit

</template>

<script>
import mobileCheck from '@/plugins/mobileCheck'
import UploadButton from '@/components/UploadButton'

export default {
  data () {
    return {
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
      },
      anticipatedCompletionDateModal: false,
      degreeExpectedOptions: ['BA', 'BLA', 'BM', 'BS', 'MA', 'MS', 'EDS', 'PBC'],
      intentConfirmOptions: ['Y', 'N'],
      namePronunciationModal: false,
      profilePictureModal: false
    }
  },
  methods: {
    namePronunciationUpload (file) {
      this.studentData.namePronunciation = file
      this.namePronunciationModal = false
    },
    profilePictureUpload (file) {
      this.studentData.profilePicture = file
      this.profilePictureModal = false
    },
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
  },
  components: {
    UploadButton
  },
  created () {
    if (process.browser) {
      console.log(mobileCheck())
    }
  }
}
</script>
