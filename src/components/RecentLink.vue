<template>
  <div class="recent-link">
    <p>{{ short }}</p>
    <p>{{ original }}</p>
    <i class="fa fa-copy"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RecentLink extends Vue {
  @Prop() private short!: string
  @Prop() private original!: string
}
</script>

<style scoped>
.recent-link {
    
}
</style>
