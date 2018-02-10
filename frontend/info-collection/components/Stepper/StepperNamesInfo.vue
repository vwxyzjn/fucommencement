<template lang="pug">
  v-form
    v-text-field(label="Diploma First Name" v-model="studentData.diplomaFirstName" required)
    v-text-field(label="Diploma Middle Name" v-model="studentData.diplomaMiddleName" required)
    v-text-field(label="Diploma Last Name" v-model="studentData.diplomaLastName" required)
    v-text-field(label="Pronounce First Name" v-model="studentData.pronounceFirstName" required)
    v-text-field(label="Pronounce Middle Name" v-model="studentData.pronounceMiddleName" required)
    v-text-field(label="Pronounce Last Name" v-model="studentData.pronounceLastName" required)
    v-text-field(label="Rhyme First Name" v-model="studentData.rhymeFirstName" required)
    v-text-field(label="Rhyme Middle Name" v-model="studentData.rhymeMiddleName" required)
    v-text-field(label="Rhyme Last Name" v-model="studentData.rhymeLastName" required)
</template>

<script>
export default {
  props: {
    studentData: {
      type: Object,
      required: true
    }
  }
}
</script>

