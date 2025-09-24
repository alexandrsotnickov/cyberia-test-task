export type FeedbackForm = {
  name: string
  message: string
  phone: string
  email: string
  agreement: boolean
}

export function validateFeedbackForm(form: FeedbackForm) {
  const errors: Record<string, string> = {}

  if (!form.name.trim()) {
    errors.name = 'Введите имя.'
  }
  if (form.message.trim().length < 20) {
    errors.message = 'Сообщение должно быть не короче 20 символов.'
  }
  console.log(form.agreement)
  if (!form.agreement) {
    errors.agreement =
      'Без согласия на обработку персональных данных мы не имеем права использовать данную информацию.'
  }

  return errors
}
