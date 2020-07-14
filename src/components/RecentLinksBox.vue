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
</style>
