<template lang="pug">
v-dialog(v-model="dialog" persistent max-width="1000px" scrollable)
  v-btn(flat color="orange" slot="activator") Edit
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
            v-select(:items="intentConfirmOptions", v-model="intentConfirm", label="Intent Confirm" dark, item-value="text")
            v-select(:items="honorOptions", v-model="honor", label="Select the honor" dark, required)

      
    v-divider
    v-card-actions
      v-spacer
      v-btn(color="orange" flat  @click="dialog = false") close
      v-btn(color="error" flat @click="dialog = false;submitForm()") Update

</template>

<script>
import UploadButton from '@/components/UploadButton'
import { Component } from 'vue-instantsearch'

export default {
  props: {
    studentData: Object
  },
  mixins: [Component],
  data () {
    return {
      dialog: false,
      objectID: '',
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
      namePronunciationPath: '',
      profilePicturePath: '',
      honor: '',
      honorOptions: ['Summa Cum Laude', 'Magna Cum Laude', 'Cum laude']
    }
  },
  methods: {
    submitForm () {
      let self = this
      let data = new FormData()
      data.append('objectID', this.objectID)
      data.append('name', this.name)
      data.append('furmanID', this.furmanID)
      data.append('anticipatedCompletionDate', this.anticipatedCompletionDate)
      data.append('degreeExpected', this.degreeExpected)
      data.append('majors', this.majors)
      data.append('interdisciplinaryMinor', this.interdisciplinaryMinor)
      data.append('diplomaFirstName', this.diplomaFirstName)
      data.append('diplomaMiddleName', this.diplomaMiddleName)
      data.append('diplomaLastName', this.diplomaLastName)
      data.append('hometownAndState', this.hometownAndState)
      data.append('pronounceFirstName', this.pronounceFirstName)
      data.append('pronounceMiddleName', this.pronounceMiddleName)
      data.append('pronounceLastName', this.pronounceLastName)
      data.append('rhymeFirstName', this.rhymeFirstName)
      data.append('rhymeMiddleName', this.rhymeMiddleName)
      data.append('rhymeLastName', this.rhymeLastName)
      data.append('postGradAddress', this.postGradAddress)
      data.append('postGradAddressTwo', this.postGradAddressTwo)
      data.append('postGradCity', this.postGradCity)
      data.append('postGradState', this.postGradState)
      data.append('postGradPostalCode', this.postGradPostalCode)
      data.append('postGradTelephone', this.postGradTelephone)
      data.append('postGradEmail', this.postGradEmail)
      data.append('intentConfirm', this.intentConfirm)
      data.append('namePronunciationPath', this.namePronunciationPath)
      data.append('profilePicturePath', this.profilePicturePath)
      data.append('honor', this.honor)

      let xhr = new XMLHttpRequest()

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          console.log(this.responseText)
          alert('The submission is successful. Thank you!')
          setTimeout(() => {
            self.searchStore.clearCache()
            self.searchStore.refresh()
          }, 2000)
        }
      })

      xhr.open('POST', this.$store.state.baseURL + '/updateEntryPOST')
      console.log(xhr)
      xhr.send(data)
    }
  },
  components: {
    UploadButton
  },
  created () {
    this.objectID = this.studentData.objectID
    this.name = this.studentData.name
    this.furmanID = this.studentData.furmanID
    this.anticipatedCompletionDate = this.studentData.anticipatedCompletionDate
    this.anticipatedCompletionDateModal = this.studentData.anticipatedCompletionDateModal
    this.degreeExpected = this.studentData.degreeExpected
    this.majors = this.studentData.majors
    this.interdisciplinaryMinor = this.studentData.interdisciplinaryMinor
    this.diplomaFirstName = this.studentData.diplomaFirstName
    this.diplomaMiddleName = this.studentData.diplomaMiddleName
    this.diplomaLastName = this.studentData.diplomaLastName
    this.hometownAndState = this.studentData.hometownAndState
    this.pronounceFirstName = this.studentData.pronounceFirstName
    this.pronounceMiddleName = this.studentData.pronounceMiddleName
    this.pronounceLastName = this.studentData.pronounceLastName
    this.rhymeFirstName = this.studentData.rhymeFirstName
    this.rhymeMiddleName = this.studentData.rhymeMiddleName
    this.rhymeLastName = this.studentData.rhymeLastName
    this.postGradAddress = this.studentData.postGradAddress
    this.postGradAddressTwo = this.studentData.postGradAddressTwo
    this.postGradCity = this.studentData.postGradCity
    this.postGradState = this.studentData.postGradState
    this.postGradPostalCode = this.studentData.postGradPostalCode
    this.postGradTelephone = this.studentData.postGradTelephone
    this.postGradEmail = this.studentData.postGradEmail
    this.intentConfirm = this.studentData.intentConfirm
    this.namePronunciationPath = this.studentData.namePronunciationPath
    this.profilePicturePath = this.studentData.profilePicturePath
    this.honor = this.studentData.honor
  }
}
</script>
