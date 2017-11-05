<template>
  <v-btn dark class="green--text darken-1 btn btn--flat jbtn-file green--text">
    {{ title }}<input id="selectFile" type="file" accept="video/*;capture=camcorder" v-on:change="fileSelected">
  </v-btn>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'upload-button',
    props: {
      selectedCallback: Function,
      title: String
    },
    methods: {
      fileSelected(e) {
        if (this.selectedCallback) {
          if (e.target.files[0]) {
            this.selectedCallback(e.target.files[0]);
          } else {
            this.selectedCallback(null);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .jbtn-file {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .jbtn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
</style>