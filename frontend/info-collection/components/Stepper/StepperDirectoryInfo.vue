<template lang="pug">
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
    v-text-field(label="Post-Grad Address" v-model="studentData.postGradAddress" required)
    v-text-field(label="Post-Grad Address Two" v-model="studentData.postGradAddressTwo" required)
    v-text-field(label="Post-Grad City" v-model="studentData.postGradCity" required)
    v-text-field(label="Post-Grad State" v-model="studentData.postGradState" required)
    v-text-field(label="Post-Grad Postal Code" v-model="studentData.postGradPostalCode" required)
    v-text-field(label="Post-Grad Telephone" v-model="studentData.postGradTelephone" required)
    v-text-field(label="Post-Grad Email" v-model="studentData.postGradEmail" required)
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
      anticipatedCompletionDateModal: false,
      degreeExpectedOptions: ['BA', 'BLA', 'BM', 'BS', 'MA', 'MS', 'EDS', 'PBC']
    }
  }
}
</script>

