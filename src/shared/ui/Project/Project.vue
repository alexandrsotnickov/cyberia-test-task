<template>
  <div class="project">
    <img class="project__image" :src="project.image" :alt="project.title" />
    <div class="project__label">{{ project.title }}</div>
    <img class="project__pointer" src="../../../pointer.svg" alt="pointer"></img>
  </div>
 
</template>

<script setup>
import { useSearchStore } from '@/shared/api/stores/ProjectsStore'

const searchStore = useSearchStore()
const props = defineProps({
  project: {
    type: Object,
    default: () => ({
      image: '',
      title: ''
    })
  }
})
</script>

<style lang="scss">
@import 'project';
</style>
