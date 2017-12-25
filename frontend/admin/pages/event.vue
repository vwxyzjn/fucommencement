<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
          <img src="http://localhost:8080/commencement/profilePicture/Shengyi4-991596.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="http://localhost:8080/commencement/profilePicture/Shengyi4-991596.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img  src="http://localhost:8080/commencement/profilePicture/Shengyi4-991596.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="http://localhost:8080/commencement/profilePicture/Shengyi4-991596.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="http://localhost:8080/commencement/profilePicture/Shengyi4-991596.jpg" alt="">
      </div>
    </flickity>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import Flickity from 'vue-flickity'

export default {
  data () {
    return {
      flickityOptions: {
        wrapAround: true,
        pageDots: false
      }
    }
  },
  components: {
    Flickity,
    NoSSR
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 100%;
  height: 200px;
  margin-left: 10px;
}

img {
  width: 100%;
  height: 100%;
}
</style>

