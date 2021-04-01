<template>
  <v-row v-if="navs" align="center" justify="space-around">
    <NavIcon
      v-for="nav in navs"
      :id="getNavId(nav)"
      :key="nav.name"
      :nav="nav"
      class="delayed-entry"
    />
  </v-row>
</template>

<script>
export default {
  props: {
    navs: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  mounted() {
    console.log(this.navs)
    this.fadeInIcons()
  },
  methods: {
    getNavId(nav) {
      return nav.name.replace(/\s+/g, '')
    },
    fadeInIcons() {
      let t = 0
      this.navs.forEach((icon) => {
        const name = icon.name.replace(/\s+/g, '')
        setTimeout(() => {
          document.querySelector(`#${name}`).style.opacity = 1
        }, t)
        t += 100
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.delayed-entry
  opacity: 0
  transition: opacity 0.5s ease-in
</style>
