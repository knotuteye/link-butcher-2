<template>
  <div class="brand slide-in-top">
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 4em;
  text-shadow: 1px 5px 10px #200053a2;
  letter-spacing: 4px;
  text-transform: lowercase;
  text-align: center;
}

/* Animation */

.slide-in-top {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
