<template>
  <a v-if="linkIsExternal" :href="nav.link" target="_blank">
    <font-awesome-icon
      class="nav-icon delayed-entry"
      :icon="iconAsList"
      @mouseover="startTypewriter"
      @mouseleave="stopTypewriter"
      @click="stopTypewriter"
    ></font-awesome-icon>
  </a>

  <NuxtLink v-else :to="nav.link">
    <font-awesome-icon
      class="nav-icon delayed entry"
      :class="{ active: isActive }"
      :icon="iconAsList"
      @mouseover="startTypewriter"
      @mouseleave="stopTypewriter"
      @click="stopTypewriter"
    ></font-awesome-icon>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
    delay: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      typewriting: false,
    }
  },
  computed: {
    navName() {
      return this.nav.name
    },
    navID() {
      return this.nav.name.replace(/\s+/g, '')
    },
    isActive() {
      return this.nav.link === this.$nuxt.$route.path
    },
    linkIsExternal() {
      return this.nav.link.includes('http')
    },
    iconAsList() {
      const icon = this.nav.icon.split(' ')
      icon[1] = icon[1].replace('fa-', '')
      return icon
    },
  },
  methods: {
    startTypewriter() {
      if (!this.typewriting) {
        this.typewriting = true
        this.$store.dispatch('typewrite', this.nav.name)
      }
    },
    stopTypewriter() {
      this.typewriting = false
      this.$store.dispatch('typewrite', '')
    },
  },
}
</script>

<style lang="sass" scoped>
$navIconSize: 3.5rem

.nav-icon
  text-decoration: none !important
  font-size: $navIconSize
  line-height: $navIconSize
  height: $navIconSize
  width: $navIconSize
  margin: 10px auto
  padding: 10px
  border: 1px solid var(--color)
  border-radius: 20px
  color: var(--color)
  transition: 0.2s ease-in-out

  &:hover
    text-decoration: None !important
    background: var(--color)
    color: var(--bg)
    transition: 0.2s ease-in-out
    cursor: pointer !important

  &.active
    background: var(--color)
    color: var(--bg)
</style>
