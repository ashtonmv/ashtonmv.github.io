<template>
  <div class="fixed-height-4rem">
    <span class="typewriter" :class="{ blinkingCursor: currentText.length }">{{
      currentText
    }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentText: '',
    }
  },
  computed: {
    finalText() {
      return this.$store.getters.typewriterText || ''
    },
  },
  watch: {
    finalText(newText) {
      this.wipe()
      this.type(newText)
    },
  },
  methods: {
    type() {
      if (this.currentText.length < this.finalText.length) {
        this.currentText = this.finalText.slice(0, this.currentText.length + 1)
      } else {
        return
      }
      const t = Math.random() * 90
      setTimeout(() => {
        this.type()
      }, t)
    },
    wipe() {
      if (this.currentText.length) {
        this.currentText = this.currentText.slice(0, -1)
      } else {
        return
      }
      setTimeout(() => {
        this.wipe()
      }, 10)
    },
  },
}
</script>

<style lang="sass" scoped>
.fixed-height-4rem
  height: 4rem

.typewriter
  color: var(--color)
  font-family: 'Oldenburg'
  font-size: 2rem

.blinkingCursor
  padding-right: 0.2rem
  border-right: 0.2rem solid var(--color)
  animation: blink 1000ms linear infinite

@-webkit-keyframes blink
  0%, 100%
    border-right-color: rgba(0, 0, 0, 0)
  50%
    border-right-color: var(--color)

@-moz-keyframes blink
  0%, 100%
    border-right-color: rgba(0, 0, 0, 0)
  50%
    border-right-color: var(--color)

@keyframes blink
  0%, 100%
    border-right-color: rgba(0, 0, 0, 0)
  50%
    border-right-color: var(--color)
</style>
