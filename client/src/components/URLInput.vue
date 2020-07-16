<template>
  <form class="url-input" v-on:submit.prevent>
    <input type="submit" value="Shrink" @click="updateTuple(url)" />
    <input
      type="url"
      v-model="url"
      name="url"
      placeholder="Paste a link to shorten it"
      required
      tabindex="1"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getNewLink } from '../api/calls'
@Component
export default class URLInput extends Vue {
  public url = ''
  async updateTuple(url: string) {
    if (url || url != '') {
      const tuple = await getNewLink(url)
      this.$store.commit('updateNewLink', tuple)
    }
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
  border: 2px solid #28a01875;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: 0;
  flex: 1;
  order: 1;
  transition: all ease-in-out 0.25s;
}

input[type='url']::placeholder {
  color: #ffffffcb;
}

input[type='submit'] {
  background: #59c173; /* fallback for old browsers */
  background: linear-gradient(
    to left,
    #5c26c179,
    #a17fe079,
    #24ca0e79
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 400% 100%;
  color: #ffffff;
  padding: 14px 2rem;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.25s;
  order: 2;
}

input[type='submit']:hover {
  background-position-x: right;
}

input[type='submit']:hover ~ input[type='url'] {
  border-color: #5c26c1bd;
}

input[type='submit']:focus {
  background: #5c26c1c9;
  color: #ffffff;
}

@media only screen and (max-width: 35rem) {
  form {
    display: grid;
    row-gap: 1rem;
    margin: 0;
  }
  input {
    width: 90%;
    border-radius: 10px;
  }

  input[type='url'] {
    border-right: 2px solid #28a01875;
  }

  input[type='submit'] {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
}
</style>
