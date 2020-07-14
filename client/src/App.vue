<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>
        <div class="wrapper">
          <Branding name="pbid.io" subtitle="Link Shortener"></Branding>
          <URLInput />
          <RecentLinksBox>
            <RecentLink
              v-for="obj in recentLinks"
              :key="obj.short"
              :short="obj.short"
              :original="obj.original"
            >
            </RecentLink>
          </RecentLinksBox>
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
import RecentLinksBox from './components/RecentLinksBox.vue'
import RecentLink from './components/RecentLink.vue'

@Component({
  components: {
    ImageBackground,
    ColorOverlay,
    Branding,
    URLInput,
    RecentLinksBox,
    RecentLink
  }
})
export default class App extends Vue {
  private recentLinks: Array<Record<string, string>>
  constructor() {
    super()
    this.recentLinks = this.$store.state.recentLinks
  }
}
</script>

<style>
* {
  margin: 0;
  outline: none;
}

#overlay > canvas {
  position: fixed;
  z-index: 1;
}

.overlay {
  display: flex;
  justify-content: center;
}

.wrapper {
  height: max-content;
  width: 80%;
  max-width: 40rem;
  margin-top: 25vh;
  z-index: 2;
  padding-bottom: 2rem;
  box-sizing: border-box;
}

.brand {
  margin-bottom: 5rem;
}

.url-input {
  margin-bottom: 5rem;
}
</style>
