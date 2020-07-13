<template>
  <div class="brand">
    <h1 class="masthead">
      {{ name }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Branding extends Vue {
  @Prop() private name!: string
}
</script>

<style scoped>
h1.masthead {
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 2em;
  text-transform: lowercase;
}

div.brand {
  border: 2px solid #ffffff69;
  width: max-content;
  padding: 1rem 2rem;
}
</style>
