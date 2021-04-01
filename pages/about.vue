<template>
  <v-container fluid align="center" class="skinny">
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <h1 class="page-header">{{ aboutMe.header }}</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" align="center">
        <img :src="aboutMe.imgSrc" class="profile-picture pr-3" />
      </v-col>
      <v-col cols="12" md="8" align="left" class= "mb-5">
        <NuxtContent :document="aboutMe" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'subpage',
  async asyncData({ $content }) {
    const aboutMe = await $content('about').fetch()
    return { aboutMe }
  },
  mounted() {
    const cachedTheme = localStorage.getItem('nuxt-color-mode')
    const theme = cachedTheme === null ? this.$store.getters.theme : cachedTheme
    this.$store.dispatch('setTheme', theme)
  },
}
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
@import '~assets/scss/textStyles.scss'

.page-header
  color: var(--color-primary)
  font-size: 3.5rem
  font-family: 'Fascinate'

.profile-picture
  height: auto
  width: 100%

a
  background: linear-gradient(to bottom, rgba(var(--color-primary-v), 0.3) 0%, rgba(var(--color-primary-v), 0.3) 100%)
  background-position: 0 100%
  background-repeat: repeat-x
  background-size: 4px 2px
  color: var(--color-primary)
  text-decoration: none
  transition: background-size .2s

a:hover
  background-size: 4px 1.3rem
</style>
