<template>
  <div class="recent scale-in-ver-center">
    <h3>Recent Links</h3>
    <div class="box" @scroll="debouncedInfiniteScroll"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getRecentLinks } from '../api/calls'

@Component
export default class RecentLinksBox extends Vue {
  public timeout!: number
  public finished = false

  async loadMore() {
    const box = this.$el.querySelector('.box') as HTMLElement
    const lastRecentLink = box.lastElementChild as HTMLElement

    if (box.scrollTop > lastRecentLink.offsetTop - 300) {
      if (!this.finished) {
        const addLinks = await getRecentLinks(
          this.$store.state.recentLinks[
            this.$store.state.recentLinks.length - 1
          ]._id
        )
        this.finished = addLinks.length == 0 ? true : false

        this.$store.commit('updateRecentLinks', addLinks)
      }
    }
  }

  debouncedInfiniteScroll() {
    if (this.timeout) {
      window.cancelAnimationFrame(this.timeout)
    }
    // Setup the new requestAnimationFrame()
    this.timeout = window.requestAnimationFrame(this.loadMore)
  }
}
</script>

<style scoped>
h3 {
  color: #ffffffd2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 10px;
}

.box {
  overflow: auto;
  border-radius: 10px;
  border: 1px solid #ffffff67;
}
@media only screen and (min-width: 35rem) {
  .box::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    border-radius: 10px;
  }

  .box::-webkit-scrollbar {
    width: 10px;
  }

  .box::-webkit-scrollbar-thumb {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ffffff42;
  }

  .box::-webkit-scrollbar-track-piece:start {
    background: transparent url('../assets/scrollbar.webp') repeat-y !important;
  }

  .box::-webkit-scrollbar-track-piece:end {
    background: transparent url('../assets/scrollbar.webp') repeat-y !important;
  }
}

/* Animation */
.scale-in-ver-center {
  animation: scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-in-ver-center {
  0% {
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}
</style>
