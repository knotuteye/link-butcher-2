<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ImageBackground extends Vue {}
</script>

<style scoped>
div.background {
  min-height: 100vh;
  width: 100vw;
  background-color: #000;
  background-image: url('../assets/backImg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
