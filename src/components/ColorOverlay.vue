<template>
  <div class="overlay" id="overlay">
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
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c536471,
    #203a4371,
    #0f202771
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c536471,
    #203a4371,
    #0f202771
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
