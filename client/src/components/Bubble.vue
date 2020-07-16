<template>
  <div id="bubble" :class="anim">
    <div>
      <a class="short" :href="short">{{ `pbid.io/${short}` }}</a>

      <a class="original" :href="original">{{
        original.slice(0, 20) + '...'
      }}</a>
    </div>
    <i @click="copyToClipboard" title="Copy" class="copy-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        />
      </svg>
    </i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Bubble extends Vue {
  @Prop() private short!: string
  @Prop() private original!: string
  public anim = this.$store.state.bubbleAnim
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

#bubble {
  padding: 1em 2rem;
  border: 0.5px solid #ffffff4f;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: #0c04169c;
}

#bubble > div {
  display: grid;
}

#bubble > div > a:last-of-type {
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

/* Animations */

.jello-horizontal {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.flip-out-hor-top {
  animation: flip-out-hor-top 0.45s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes flip-out-hor-top {
  0% {
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    opacity: 0;
  }
}
</style>
