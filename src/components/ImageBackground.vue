<template>
  <div class="background"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ImageBackground extends Vue {}
</script>

<style scoped>
div.background {
  min-height: 100vh;
  width: 100vw;
  background-image: url('../assets/backImg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
