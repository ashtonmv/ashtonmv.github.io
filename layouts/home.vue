<template>
  <v-app id="app">
    <v-container fill-height>
      <v-container class="skinny" fluid>
        <Nuxt />
        <v-row align="center">
          <v-col cols="12" class="mb-5">
            <ThemeMenu />
          </v-col>
        </v-row>
        <NavMenu :navs="navs" />
        <v-row align="center">
          <v-col cols="12" align="center">
            <Typewriter />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    navs() {
      return this.$store.getters.navs
    },
  },
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
@import '~assets/scss/textStyles.scss'

h1
  font-family: 'Fascinate'
  color: var(--color-primary)
  font-size: 4rem
h3
  font-family: 'Oldenburg'
  font-size: 2rem

.skinny
  width: 60%

@media #{map-get($display-breakpoints, 'sm-and-down')}
  h1
    font-size: 3rem
  h3
    font-size: 1.5rem
  .skinny
    width: 95%

.fixed-height
  height: 4rem

.profile-picture
  height: 240px
  width: auto
</style>
