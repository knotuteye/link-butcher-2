<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>
        <div class="wrapper">
          <Branding name="pbid.io" subtitle="Link Shortener"></Branding>
          <URLInput />
        </div>
      </ColorOverlay>
    </ImageBackground>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBackground from './components/ImageBackground.vue'
import ColorOverlay from './components/ColorOverlay.vue'
import Branding from './components/Branding.vue'
import URLInput from './components/URLInput.vue'
@Component({
  components: {
    ImageBackground,
    ColorOverlay,
    Branding,
    URLInput
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  outline: none;
}

.overlay {
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.brand {
  margin-bottom: 5rem;
}
</style>
