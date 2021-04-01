<template>
  <v-app id="app">
    <v-container fill-height fluid>
      <v-container class="skinny">
        <v-row align="center" justify="center">
          <v-col cols="12" align="center" justify="center">
            <h1>{{ pageNotFound }}</h1>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <h3>Maybe we can just start over?</h3>
        </v-row>
        <v-row align="center" justify="center">
          <NavIcon :nav="homeNav" />
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "That page... doesn't exist.",
      otherError: 'Either you just broke my website or I did.',
      homeNav: {
        name: 'Home',
        link: '/',
        icon: 'fas fa-home',
      },
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
@import '~assets/scss/textStyles.scss'

#app
  background: var(--bg)

h1
  font-family: 'Fascinate'
  font-size: 4.5rem

h3
  font-family: 'Oldenburg'
  font-size: 2rem

.skinny
  width: 60%

@media #{map-get($display-breakpoints, 'md-and-down')}
  h1
    font-size: 3rem
  h3
    font-size: 1.5rem
  .skinny
    width: 90%
</style>
