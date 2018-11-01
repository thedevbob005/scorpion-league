<template>
  <div>
    <v-carousel hide-delimiters hide-controls height="40vw">
      <v-carousel-item
              v-for="(item,i) in slides"
              :key="i"
              :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-container fluid>
      <v-layout>
        <v-flex xs12>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
      ]
    }
  },
  mounted () {}
}
</script>
