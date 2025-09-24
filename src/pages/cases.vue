<template>
  <Header />
  <div class="app">
    <main>
      <Breadcrumbs />
      <article>
        <h1 class="name-page">Кейсы</h1>
      </article>
      <div class="category-buttons">
        <CategoryButton
          v-for="category of categoriesStore.items"
          :key="category.id"
          :category="category"
          @click="filterProjects(category.id)"
        />
      </div>
      <div class="projects">
        <ProjectBox
          v-for="project of searchStore.items"
          :key="project.id"
          :project="project"
        />
      </div>
      <FeedbackForm />
    </main>
  </div>
  <Footer />
</template>

<script setup>
import { Header } from '@/widgets/header'
import { Breadcrumbs } from '@/widgets/breadcrumbs'
import { ProjectBox } from '@/shared/ui/Project'
import { onMounted, ref } from 'vue'
import { useSearchStore } from '../shared/api/stores/ProjectsStore'
import { CategoryButton } from '@/shared/ui/CategoryButton'
import { useCategoriesStore } from '@/shared/api/stores/CategoriesStore'
import { FeedbackForm } from '@/widgets/feedback-form'
import { Footer } from '@/widgets/footer'

const searchStore = useSearchStore()

onMounted(() => {
  searchStore.getProjects()
})

const categoriesStore = useCategoriesStore()

onMounted(() => {
  categoriesStore.getCategories()
})

const filteredProjects = ref([])
function filterProjects(categoryId) {
  filteredProjects.value = searchStore.getByCategory(categoryId)
}
</script>

<style lang="scss">
@import 'styles/name-page';
@import 'styles/projects';
@import 'styles/category-buttons';
</style>
