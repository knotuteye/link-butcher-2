<template>
  <form class="url-input" v-on:submit.prevent="standardizeURL(url)" novalidate>
    <input type="submit" aria-label="Shrink the pasted link" value="Shrink" />
    <input
      type="url"
      v-model="url"
      name="url"
      :class="err"
      placeholder="Paste a link to shorten it"
      required
      aria-label="Paste a link here"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getNewLink } from '../api/calls'
@Component
export default class URLInput extends Vue {
  public url = ''
  public err = ''
  async updateTuple() {
    if (this.url || this.url != '') {
      const tuple = await getNewLink(this.url)
      this.$store.commit('updateNewLink', tuple)
    }
  }
  standardizeURL() {
    if (
      !(this.url.slice(0, 7) == 'http://' || this.url.slice(0, 8) == 'https://')
    ) {
      this.url = `http://${this.url}`
    }
    if (this.validURL(this.url)) {
      this.updateTuple()
    } else {
      this.err = 'error'
      setTimeout(() => {
        this.err = ''
      }, 700)
    }
  }

  validURL(str: string): boolean {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  }
}
</script>

<style scoped>
p {
  color: white;
}
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

input[type='url'].error {
  border-color: red;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
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

input[type='submit']:hover ~ input[type='url'].error {
  border-color: red;
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

/* animations */
@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}
</style>
