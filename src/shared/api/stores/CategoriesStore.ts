import { defineStore } from 'pinia'
import type { Category } from '~/src/entities/category/model/Category'
const url = 'https://api.test.cyberia.studio/api/v1/project-categories'

export const useCategoriesStore = defineStore('categoriesStore', {
  state: () => ({
    items: [] as Category[]
  }),
  actions: {
    async getCategories() {
      const res = await fetch(`${url}`)
      const data = await res.json()
      console.log(data)
      this.items = data.items
    }
  }
})
