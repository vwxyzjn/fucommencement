<template>
  <v-app dark>
    <main>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </main>
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
