<template>
  <form class="url-input">
    <input type="url" name="url" placeholder="Paste a link to shorten it" />
    <input type="submit" value="Shrink" />
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
  max-width: 32rem;
}
input {
  padding: 12px;
  font-size: 1.2em;
  border: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  background: transparent;
}

input[type='url'] {
  color: #ffffff;
  background-color: transparent;
  border-bottom: 2px solid #ffffff67;
  flex: 1;
}
input[type='url']::placeholder {
  color: #ffffffcb;
}

input[type='submit'] {
  background-color: #ffffff69;
  color: #ffffff;
  padding: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #ffffffcb;
  color: #6f16ff;
}
</style>
