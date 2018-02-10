<template lang="pug">
  v-form
    v-layout(row wrap)
      v-flex(xs12 sm6).pr-2
        v-card 
          v-card-text 
            v-btn(block, @click.native.stop="profilePictureModal = true") Upload Profile Picture
            v-dialog(v-model="profilePictureModal" lazy max-width="600")
              v-card
                v-card-title
                  .headline Please upload your profile picture
                v-card-text
                  p You may upload JPEG, PNG, and JPG.

                v-card-actions
                  v-spacer
                  upload-button(title="Upload Profile Picture" :selectedCallback="profilePictureUpload").ml-0

            div(v-if="profilePictureDataUrl").mb-2 
              div.my-3 You profile picture will be the following. If you are not statisfied, you may click on button above upload another one.
              img(:src="profilePictureDataUrl" width="100%")


      v-flex(xs12 sm6).pl-2
        v-card 
          v-card-text 
            v-btn(block, @click.native.stop="namePronunciationModal = true") Upload name pronunciation
            v-dialog(v-model="namePronunciationModal" lazy max-width="600")
              v-card
                v-card-title
                  .headline Please upload your name pronunciation
                v-card-text
                  p You can either upload a video or sound file

                v-card-actions
                  v-spacer
                  upload-button(title="Upload Name Pronunciation" :selectedCallback="namePronunciationUpload").ml-0

            div(v-if="namePronunciationDataUrl").mb-2 
              div.my-3 You video of name pronunciatio will be the following. If you are not statisfied, you may click on button above upload another one.
              video(controls width="100%")
                source(:src="namePronunciationDataUrl" type="video/mp4")
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
      namePronunciationDataUrl: '',
      profilePictureModal: false,
      profilePictureDataUrl: ''
    }
  },
  methods: {
    namePronunciationUpload (file) {
      this.studentData.namePronunciation = file
      this.namePronunciationModal = false
      let reader = new FileReader()
      reader.onload = (e) => {
        this.namePronunciationDataUrl = e.target.result
      }
      reader.readAsDataURL(file)
    },
    profilePictureUpload (file) {
      this.studentData.profilePicture = file
      this.profilePictureModal = false
      let reader = new FileReader()
      reader.onload = (e) => {
        this.profilePictureDataUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  },
  components: {
    UploadButton
  }
}
</script>

