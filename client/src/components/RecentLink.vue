<template>
  <div class="recent-link">
    <div>
      <a class="short" :href="short">{{ `pbid.io/${short}` }}</a>
      <a class="original" :href="original" :title="original">{{
        original.slice(0, 20) + '...'
      }}</a>
    </div>
    <i @click="copyToClipboard" title="Copy" class="copy-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        /></svg
    ></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RecentLink extends Vue {
  @Prop() private short!: string
  @Prop() private original!: string
  copyToClipboard(): void {
    const el = document.createElement('textarea')
    el.value = `pbid.io/${this.short}`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    alert('Copied!')
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9em;
}

a.short {
  font-size: 1.2em;
}

.recent-link {
  padding: 1em 2rem;
  border-bottom: 0.5px solid #ffffff4f;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}

.recent-link:last-of-type {
  border-bottom: 0;
}

.recent-link:nth-of-type(2n + 1) {
  background-color: #ffffff1c;
}
:last-of-type .recent-link > div {
  display: grid;
}

.recent-link > div > a:last-of-type {
  color: #ffffffb4;
  margin-top: 10px;
}

i {
  cursor: pointer;
  align-self: center;
  font-size: 1.5em;
  color: #ffffffa9;
}

i:hover {
  color: #ffffff;
}
</style>
