<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ColorOverlay extends Vue {}
</script>

<style scoped>
div.overlay {
  min-height: 100vh;
  width: 100vw;
  background-color: #6f16ffaa;
}
</style>
