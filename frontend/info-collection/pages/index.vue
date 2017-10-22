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
                v-text-field(label="Name" v-model="name", required)
                v-text-field(label="Furman ID" v-model="furmanID" required)
              
                v-dialog(persistent v-model="anticipatedCompletionDateModal" lazy full-width)
                  v-text-field(slot="activator", label="Please select a date", v-model="anticipatedCompletionDate", readonly, required)
                  v-date-picker(v-model="anticipatedCompletionDate", scrollable dark)
                    template(scope="{ save, cancel }")
                      v-card-actions
                        v-btn.green--text.darken-1( flat @click.native="cancel()") Cancel
                        v-btn.green--text.darken-1( flat @click.native="save()") Save
                
                v-select(:items="degreeExpectedOptions", v-model="degreeExpected", label="Select the degree expected" dark, item-value="text", required)
                v-text-field(label="Major(s)" v-model="majors" required)
                v-text-field(label="Interdisciplinary Minor(s) " v-model="interdisciplinaryMinor" required)
                v-text-field(label="Diploma First Name" v-model="diplomaFirstName" required)
                v-text-field(label="Diploma Middle Name" v-model="diplomaMiddleName" required)
                v-text-field(label="Diploma Last Name" v-model="diplomaLastName" required)
                v-text-field(label="Hometown and State" v-model="hometownAndState" required)
                v-text-field(label="Pronounce First Name" v-model="pronounceFirstName" required)
                v-text-field(label="Pronounce Middle Name" v-model="pronounceMiddleName" required)
                v-text-field(label="Pronounce Last Name" v-model="pronounceLastName" required)
            
            v-flex(xs12 sm6).px-3
              v-form
                v-text-field(label="Rhyme First Name" v-model="rhymeFirstName" required)
                v-text-field(label="Rhyme Middle Name" v-model="rhymeMiddleName" required)
                v-text-field(label="Rhyme Last Name" v-model="rhymeLastName" required)
                v-text-field(label="Post-Grad Address" v-model="postGradAddress" required)
                v-text-field(label="Post-Grad Address Two" v-model="postGradAddressTwo" required)
                v-text-field(label="Post-Grad City" v-model="postGradCity" required)
                v-text-field(label="Post-Grad State" v-model="postGradState" required)
                v-text-field(label="Post-Grad Postal Code" v-model="postGradPostalCode" required)
                v-text-field(label="Post-Grad Telephone" v-model="postGradTelephone" required)
                v-text-field(label="Post-Grad Email" v-model="postGradEmail" required)
                v-dialog(v-model="namePronunciationModal" lazy full-width)
                  v-text-field(slot="activator", label="(Optional) Upload Name Pronunciation", :value="namePronunciation ? 'Name Pronunciation uploaded' : ''", readonly)
                  v-card
                    v-card-title
                      .headline Please upload your Name Pronunciation
                    v-card-text
                      p you can either upload a video or sound file
                      
                    v-card-actions
                      v-spacer
                      upload-button(title="Upload Profile Picture" :selectedCallback="namePronunciationUpload").ml-0

                v-dialog(v-model="profilePictureModal" lazy full-width)
                  v-text-field(slot="activator", label="Please Upload Profile Picture", :value="profilePicture ? 'Profile Picture uploaded': '' ", readonly, required)
                  v-card
                    v-card-title
                      .headline Please upload your Name Pronunciation
                    v-card-text
                      p you can either upload a video or sound file

                    v-card-actions
                      v-spacer
                      upload-button(title="Upload Profile Picture" :selectedCallback="profilePictureUpload").ml-0

                v-select(:items="intentConfirmOptions", v-model="intentConfirm", label="Intent Confirm" dark, item-value="text")

          

        v-card-actions
          v-spacer
          v-btn(primary @click="submitForm") Submit

</template>

<script>
import mobileCheck from '@/plugins/mobileCheck'
import UploadButton from '@/components/UploadButton'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'

export default {
  data () {
    return {
      name: '',
      furmanID: '',
      anticipatedCompletionDate: null,
      anticipatedCompletionDateModal: false,
      degreeExpected: '',
      degreeExpectedOptions: ['BA', 'BLA', 'BM', 'BS', 'MA', 'MS', 'EDS', 'PBC'],
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
      intentConfirmOptions: ['Y', 'N'],
      intentConfirm: '',
      namePronunciation: '',
      namePronunciationModal: false,
      profilePicture: '',
      profilePictureModal: false
    }
  },
  methods: {
    namePronunciationUpload (file) {
      this.namePronunciation = file
      this.namePronunciationModal = false
    },
    profilePictureUpload (file) {
      this.profilePicture = file
      this.profilePictureModal = false
    },
    submitForm () {
      let data = new FormData()
      data.append('namePronunciation', this.namePronunciation)
      data.append('diplomaFirstName', 'fdsfads')
      data.append('profilePicture', this.profilePicture)
      data.append('furmanID', '0991601')
      data.append('name', this.name)

      let xhr = new XMLHttpRequest()

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          console.log(this.responseText)
          alert('The submission is successful. Thank you!')
        }
      })

      xhr.open('POST', 'http://localhost:8080/commencementPOST')
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
