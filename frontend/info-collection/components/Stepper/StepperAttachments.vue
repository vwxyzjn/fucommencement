<template lang="pug">
  v-form
    v-layout(row wrap)
      v-flex(xs12 sm6)
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


      v-flex(xs12 sm6)
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
    div.mt-3
      v-btn(color='primary', @click.native='finishStep("back")') Back
      v-btn(color='primary', @click.native='finishStep("next")') Continue

    v-snackbar(:timeout="2000" top right vertical v-model='snackbar')
      | you haven't uploaded your profile picture and name pronunciation yet.
      v-btn(flat='', color='pink', @click.native='snackbar = false') Close

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
      profilePictureDataUrl: '',
      snackbar: false
    }
  },
  methods: {
    namePronunciationUpload (file) {
      this.studentData.namePronunciation = file
      this.namePronunciationModal = false
      let reader = new FileReader()
      reader.onload = (e) => {
        this.namePronunciationDataUrl = false
        setTimeout(() => {
          this.namePronunciationDataUrl = e.target.result
        }, 300) // give it some time
      }
      reader.readAsDataURL(file)
    },
    profilePictureUpload (file) {
      this.studentData.profilePicture = file
      this.profilePictureModal = false
      let reader = new FileReader()
      reader.onload = (e) => {
        this.profilePictureDataUrl = false
        setTimeout(() => {
          this.profilePictureDataUrl = e.target.result
        }, 300)
      }
      reader.readAsDataURL(file)
    },
    finishStep (direction) {
      if (direction === 'back') {
        this.$emit('finishStep', direction)
        return
      }
      if (this.studentData.namePronunciation && this.studentData.profilePicture) {
        this.$emit('finishStep', direction)
      } else {
        this.snackbar = true
      }
    }
  },
  components: {
    UploadButton
  }
}
</script>

