<template>
  <v-app light>
    <v-toolbar fixed class="deep-purple white--text">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container>
        <nuxt />
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
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
        title: 'Furman Commencement Information Collection'
      }
    }
  }
</script>
