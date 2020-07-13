<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>
        <Branding name="pbid.io" subtitle="Link Shortener"></Branding>
      </ColorOverlay>
    </ImageBackground>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBackground from './components/ImageBackground.vue'
import ColorOverlay from './components/ColorOverlay.vue'
import Branding from './components/Branding.vue'
@Component({
  components: {
    ImageBackground,
    ColorOverlay,
    Branding
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
}
</style>
