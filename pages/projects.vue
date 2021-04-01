<template>
  <v-container>
    <v-container
      v-for="category in projects.categories"
      :key="category.name"
    >
      <v-row>
        <v-col cols="12" v-for="projects in projects.categories">

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  layout: 'subpage',
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()
    return { projects }
  },
}
</script>

<style></style>
