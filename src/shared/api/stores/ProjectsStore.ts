import { defineStore } from 'pinia'
const url = 'https://api.test.cyberia.studio/api/v1/projects'

type Category = {
  id: number
  name: string
}
type Project = {
  categories: Category[]
}

export const useSearchStore = defineStore('projectsStore', {
  state: () => ({
    items: [] as Project[]
  }),
  actions: {
    async getProjects() {
      const res = await fetch(`${url}`)
      const data = await res.json()
      console.log(data)
      this.items = data.items
    },
    async getByCategory(categoryId: number) {
      await this.getProjects()
      this.items = this.items.filter(
        (project) => project.categories[0].id === categoryId
      )
      console.log(this.items)
    }
  }
})
