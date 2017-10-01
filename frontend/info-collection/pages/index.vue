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
                  v-text-field(slot="activator", label="Please select a date", v-model="anticipatedCompletionDate", readonly)
                  v-date-picker(v-model="anticipatedCompletionDate", scrollable dark)
                    template(scope="{ save, cancel }")
                      v-card-actions
                        v-btn( primary @click.native="cancel()") Cancel
                        v-btn( primary @click.native="save()") Save
                
                v-select(:items="degreeExpectedOptions", v-model="degreeExpected", label="Select the degree expected" dark, item-value="text")
                v-text-field(label="Major(s)" v-model="majors" required)
                v-text-field(label="Interdisciplinary Minor(s) " v-model="interdisciplinaryMinor" required)
                v-text-field(label="Diploma First Name" v-model="diplomafirstName" required)
                v-text-field(label="Diploma Middle Name" v-model="diplomamiddleName" required)
                v-text-field(label="Diploma Last Name" v-model="diplomalastName" required)
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


        v-card-actions
          v-spacer
          v-btn(primary nuxt to="/inspire") Submit

</template>

<script>
import mobileCheck from '@/plugins/mobileCheck'

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
      diplomafirstName: '',
      diplomamiddleName: '',
      diplomalastName: '',
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
      intentConfirm: ''
    }
  },
  created () {
    if (process.browser) {
      console.log(mobileCheck())
    }
  }
}
</script>
