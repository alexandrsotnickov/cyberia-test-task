import { ref } from 'vue'
import type { FeedbackForm } from '@/shared/models/validation'

export function useFeedback() {
  const loading = ref(false)
  const response = ref<{ success: boolean; message: string } | null>(null)
  const error = ref<string | null>(null)
  const validationErrors = ref<Record<string, string[]>>({})
  const isSuccessResponse = ref(false)
  const successMessage = ref<string>('')

  const submit = async (form: FeedbackForm) => {
    loading.value = true
    error.value = null
    validationErrors.value = {}
    try {
      const data = await $fetch(
        'https://api.test.cyberia.studio/api/v1/feedbacks',
        {
          method: 'POST',
          body: form
        }
      )

      response.value = data as { success: boolean; message: string }
      if (response.value.message === 'Feedback accepted.') {
        isSuccessResponse.value = true
        successMessage.value = 'Информация успешно отправлена'
      }
    } catch (err: any) {
      if (err?.status === 422) {
        validationErrors.value = err.data.errors || {}
        console.log(err.data.errors)
      } else {
        error.value = err.message || 'Ошибка при отправке'
      }
      isSuccessResponse.value = false
      successMessage.value = ''
    } finally {
      loading.value = false
    }
  }

  return {
    successMessage,
    loading,
    isSuccessResponse,
    error,
    validationErrors,
    submit
  }
}
