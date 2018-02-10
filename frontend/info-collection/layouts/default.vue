<template>
  <v-app dark>
    <v-toolbar app fixed class="deep-purple white--text"> 
      <v-toolbar-title v-text="title"></v-toolbar-title> 
    </v-toolbar> 
    <v-content>
      <v-container fluid grid-list-xl>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { to: '/', title: 'Welcome', icon: 'apps' },
        { to: '/inspire', title: 'Inspire', icon: 'bubble_chart' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Furman Commencement'
    }
  }
}
</script>
