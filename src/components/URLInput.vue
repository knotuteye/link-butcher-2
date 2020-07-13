<template>
  <form class="url-input">
    <input type="url" name="url" placeholder="Paste a link to shorten it" />
    <input type="submit" value="Shorten" />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class URLInput extends Vue {}
</script>

<style scoped>
form {
  width: 75%;
  display: flex;
  max-width: 35rem;
}
input {
  padding: 12px;
  border: 0;
}
input[type='url'] {
  background-color: transparent;
  border-bottom: 2px solid #ffffff67;
  flex: 1;
}
input[type='url']::placeholder {
  color: #ffffff;
}

input[type='submit'] {
  background-color: #ffffff67;
  color: #ffffff;
  padding: 14px;
}
</style>
