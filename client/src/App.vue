<template>
  <div id="app">
    <ImageBackground>
      <ColorOverlay>
        <div class="wrapper">
          <Branding name="pbid.io" subtitle="Link Shortener"></Branding>
          <URLInput />
          <!-- <Bubble
            v-if="newTuple"
            :short="newTuple.slug"
            :original="newTuple.url"
          /> -->
          <RecentLink
            id="bubble"
            :bubble="true"
            v-if="newTuple"
            :short="newTuple.slug"
            :original="newTuple.url"
          />
          <RecentLinksBox v-if="recentLinks.length != 0">
            <RecentLink
              v-for="obj in recentLinks"
              :key="obj.slug"
              :short="obj.slug"
              :original="obj.url"
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
import Bubble from './components/Bubble.vue'
import { getRecentLinks } from './api/calls'

@Component({
  components: {
    ImageBackground,
    ColorOverlay,
    Branding,
    URLInput,
    RecentLinksBox,
    RecentLink,
    Bubble
  }
})
export default class App extends Vue {
  constructor() {
    super()
    this.fetchAndUpdateRecentLinks()
  }

  fetchAndUpdateRecentLinks() {
    getRecentLinks()
      .then(data => {
        this.$store.commit('updateRecentLinks', data)
      })
      .catch(() => {
        this.$store.commit('updateConnectionError', true)
      })
  }

  get recentLinks() {
    return this.$store.state.recentLinks
  }
  get newTuple() {
    return this.$store.state.newTuple
  }
}
</script>

<style>
* {
  margin: 0;
  outline: none;
}

.background {
  overflow: hidden;
}

#overlay > canvas {
  overflow: hidden;
  position: fixed;
  z-index: 1;
}

.overlay {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.wrapper {
  height: max-content;
  width: 80%;
  max-width: 40rem;
  margin-top: 18vh;
  z-index: 2;
  padding-bottom: 2rem;
  box-sizing: border-box;
}

.brand {
  margin-bottom: 5rem;
}

#bubble {
  margin-bottom: 2rem;
}

.url-input {
  margin: 2rem 0;
}

.box {
  max-height: 22rem;
}

@media only screen and (max-width: 35rem) {
  .wrapper {
    margin-top: 12vh;
  }
  .brand {
    margin-bottom: 5vh;
  }

  .box {
    max-height: 40vh;
  }
}
</style>
