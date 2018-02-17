<template lang="pug">
  v-form(ref="form")
    v-text-field(label="Diploma First Name" v-model="studentData.diplomaFirstName" required :rules="requireRules")
    v-text-field(label="Diploma Middle Name" v-model="studentData.diplomaMiddleName")
    v-text-field(label="Diploma Last Name" v-model="studentData.diplomaLastName" required :rules="requireRules")
    v-text-field(label="Pronounce First Name" v-model="studentData.pronounceFirstName" required :rules="requireRules")
    v-text-field(label="Pronounce Middle Name" v-model="studentData.pronounceMiddleName")
    v-text-field(label="Pronounce Last Name" v-model="studentData.pronounceLastName" required :rules="requireRules")
    v-text-field(label="Rhyme First Name" v-model="studentData.rhymeFirstName" required :rules="requireRules")
    v-text-field(label="Rhyme Middle Name" v-model="studentData.rhymeMiddleName")
    v-text-field(label="Rhyme Last Name" v-model="studentData.rhymeLastName" required :rules="requireRules")

    v-btn(color='primary', @click.native='finishStep("back")') Back
    v-btn(color='primary', @click.native='finishStep("next")') Continue
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
      requireRules: [(v) => !!v || 'Required']
    }
  },
  methods: {
    finishStep (direction) {
      if (direction === 'back') {
        this.$emit('finishStep', direction)
        return
      }
      if (this.$refs.form.validate()) {
        this.$emit('finishStep', direction)
      }
    }
  }
}
</script>

