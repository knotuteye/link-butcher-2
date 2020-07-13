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
  font-size: 4em;
  text-shadow: 1px 5px 10px #200053a2;
  letter-spacing: 4px;
  text-transform: lowercase;
  text-align: center;
}
</style>
