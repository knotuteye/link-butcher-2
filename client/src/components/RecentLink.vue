<template>
  <div class="recent-link">
    <div>
      <a class="short" :href="short">{{ `pbid.io/${short}` }}</a>
      <a class="original" :href="original">{{ original }}</a>
    </div>
    <i @click="copyToClipboard" title="Copy" class="fa fa-copy"></i>
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
}

a.short {
  font-size: 1.2em;
}

.recent-link {
  padding: 1em 2rem;
  border: 0.5px solid #ffffff4f;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}

.recent-link:first-of-type {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.recent-link:last-of-type {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
