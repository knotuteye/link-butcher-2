<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>HE</ColorOverlay>
    </ImageBackground>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBackground from './components/ImageBackground.vue'
import ColorOverlay from './components/ColorOverlay.vue'
@Component({
  components: {
    ImageBackground,
    ColorOverlay
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
}
</style>
