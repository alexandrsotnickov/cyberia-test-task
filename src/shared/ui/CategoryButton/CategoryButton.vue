<template>
  <button class="category-button">{{ category.name }}</button>
</template>

<script setup>
import { useCategoriesStore } from '@/shared/api/stores/CategoriesStore'

const categoriesStore = useCategoriesStore()
const props = defineProps({
  category: {
    type: Object,
    default: () => ({
      id: '',
      name: ''
    })
  }
})
</script>

<style lang="scss">
@import 'category-button';
</style>
