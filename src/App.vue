<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>
        <div class="wrapper">
          <Branding name="pbid.io" subtitle="Link Shortener"></Branding>
          <URLInput />
          <RecentLinksBox>
            <RecentLink
              short="x34asd4e"
              original="facebook.com/assets/img/sdf"
            ></RecentLink
            ><RecentLink
              short="x34asd4e"
              original="facebook.com/assets/img/sdf"
            ></RecentLink
            ><RecentLink
              short="x34asd4e"
              original="facebook.com/assets/img/sdf"
            ></RecentLink
            ><RecentLink
              short="x34asd4e"
              original="facebook.com/assets/img/sdf"
            ></RecentLink>
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
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  outline: none;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  height: max-content;
  width: 80%;
  max-width: 40rem;
}

.brand {
  margin-bottom: 5rem;
}

.url-input {
  margin-bottom: 5rem;
}
</style>
