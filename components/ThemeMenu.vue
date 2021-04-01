<template>
  <v-row align="center" justify="center">
    <v-btn
      v-for="t in themes"
      :key="t"
      text
      class="v-btn mx-3"
      :class="{ active: activeTheme === t }"
      @click="setTheme(t)"
    >
      {{ t }}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      themes: ['coffee', 'gumball'],
    }
  },
  computed: {
    activeTheme() {
      return this.$nuxt.$colorMode.preference
    },
  },
  methods: {
    setTheme(theme) {
      this.$store.dispatch('setTheme', theme)
    },
  },
}
</script>

<style lang="sass" scoped>
.v-btn
  color: var(--color)
  transition: all 0.3s ease-in-out
  font-family: 'Oldenburg' !important

.v-btn.active
  background: var(--color)
  color: var(--bg)
</style>
