<template>
  <form class="url-input" :action="`javascript:${updateTuple(url)}`">
    <input
      type="url"
      v-model="url"
      name="url"
      placeholder="Paste a link to shorten it"
    />
    <input type="submit" value="Shrink" />+
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getNewLink } from '../api/calls'

@Component
export default class URLInput extends Vue {
  public url = ''
  async updateTuple(url: string) {
    const tuple = await getNewLink(`${window.location.href}slugs/create`, url)
    this.$store.commit('updateNewLink', tuple)
    console.log(tuple)
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input {
  padding: 12px;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
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
  border: 2px solid #ffffff67;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 1;
}
input[type='url']::placeholder {
  color: #ffffffcb;
}

input[type='submit'] {
  background-color: #ffffff69;
  color: #ffffff;
  padding: 14px 2rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #ffffffcb;
  color: #6f16ff;
}

input[type='submit']:focus {
  background-color: #28a018cb;
  color: #ffffff;
}

@media only screen and (max-width: 35rem) {
  form {
    display: grid;
    row-gap: 1rem;
  }
  input {
    width: 90%;
    border-radius: 10px;
  }
  input[type='submit'] {
    width: 100%;
  }
}
</style>
