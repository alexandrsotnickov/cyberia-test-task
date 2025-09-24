// composables/useBreadcrumbs.ts
import { computed } from 'vue'
import { useRoute } from '#app'

export interface BreadcrumbItem {
  label: string
  path: string
}
type BreadcrumbsDescription = Record<string, string>
const breadcrumbsDescription: BreadcrumbsDescription = {
  cases: 'Кейсы'
}

export const useBreadcrumbs = () => {
  const route = useRoute()

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const crumbs: BreadcrumbItem[] = []
    const pathArray = route.path.split('/').filter((p) => p)

    pathArray.forEach((path, index) => {
      const fullPath = '/' + pathArray.slice(0, index + 1).join('/')
      crumbs.push({
        label: breadcrumbsDescription[path],
        path: fullPath
      })
    })

    return crumbs
  })

  return {
    breadcrumbs
  }
}
