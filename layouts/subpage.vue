<template>
  <v-app id="app">
    <v-container align="center" justify="center" class="pt-0">
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center">
          <v-card flat class="nav-menu-container">
            <NavMenu :navs="navs" />
          </v-card>
        </v-col>
      </v-row>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    navs() {
      const myNavs = [...this.$store.getters.navs]
      if (!myNavs) {
        return
      }
      const homeNav = {
        name: 'Home',
        link: '/',
        icon: 'fas fa-home',
      }
      myNavs.unshift(homeNav)
      console.log(myNavs)
      return myNavs
    },
  },
}
</script>

<style lang="sass" scoped>
.nav-menu-container
  background-color: rgba(255, 255, 255, 0.05)
  border: 1px solid var(--color)
  border-top: none
  padding: 1rem
  border-radius: 0 0 2rem 2rem
  width: 60%
</style>
