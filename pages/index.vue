<template lang="pug">
        landing-container
</template>

<script>
import LandingContainer from '~/components/LandingContainer.vue'

export default {
  components: {
    LandingContainer
  },
  head() {
    return {
      title: 'Forsage Dance School',
      meta: [
        { name: 'description', hid: 'description', content: 'Начни танцевать прямо сейчас' },
        // Open Graph
        { name: 'og:title', content: 'Forsage Dance School' },
        { name: 'og:description', content: 'Начни танцевать прямо сейчас' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'forsagedanceschool.ru' },
        { name: 'og:image', content: 'https://forsagedanceschool.ru/favicon.ico' }
      ]
  }
}
}




</script>




<style lang="stylus">
</style>

