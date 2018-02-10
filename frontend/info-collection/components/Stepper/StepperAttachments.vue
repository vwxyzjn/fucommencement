<template lang="pug">
  v-form
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
</template>

<script>
import UploadButton from '@/components/UploadButton'

export default {
  props: {
    studentData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
    }
  },
  components: {
    UploadButton
  }
}
</script>

