<template>
  <div class="recent">
    <h3>Recent Links</h3>
    <div class="box"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ImageBackground extends Vue {}
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
  max-height: 22rem;
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
    background: transparent url('../assets/scrollbar.png') repeat-y !important;
  }

  .box::-webkit-scrollbar-track-piece:end {
    background: transparent url('../assets/scrollbar.png') repeat-y !important;
  }
}
</style>
