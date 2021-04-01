<template>
  <v-row>
    <!-- user Name row -->
    <v-col cols="12" align="center" justify="center">
      <img src="profile.png" class="profile-picture"/>
    </v-col>
    <v-col cols="12" align="center" justify="center">
      <h1 style="text-align: center">Michael Ashton</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'home',
  mounted() {
    const cachedTheme = localStorage.getItem('nuxt-color-mode')
    const theme =
      cachedTheme === null ? this.$store.getters.theme : cachedTheme
    this.$store.dispatch('setTheme', theme)
  },
}
</script>
