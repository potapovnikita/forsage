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
        { property: 'og:title', content: 'Forsage Dance School' },
        { property: 'og:description', content: 'Начни танцевать прямо сейчас' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'forsagedanceschool.ru' },
        { property: 'og:image', content: 'https://forsagedanceschool.ru/favicon.png' }
      ]
  }
}
}




</script>




<style lang="stylus">
</style>

