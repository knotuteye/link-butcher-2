<template>
  <div class="overlay" id="overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ColorOverlay extends Vue {}
</script>

<style scoped>
div.overlay {
  min-height: 100vh;
  width: 100vw;
  background: #0c04165b;
}
</style>
