<template>
  <h2 class="feedback-form-title">Расскажите<br />о вашем проекте:</h2>
  <form novalidate class="form" method="post" @submit.prevent="onSubmit">
    <div class="form__row">
      <div class="form__group">
        <label class="form__label">Ваше имя*</label>
        <input
          class="form__input"
          v-model="form.name"
          type="text"
          name="name"
          required
        />
        <p v-if="frontErrors.name" class="form__error">
          {{ frontErrors.name }}
        </p>
        <p v-if="validationErrors.name" class="form__error">
          {{ validationErrors.name[0] }}
        </p>
      </div>
      <div class="form__group">
        <label class="form__label">Email*</label>
        <input
          class="form__input"
          v-model="form.email"
          type="email"
          name="email"
          required
        />
        <p v-if="validationErrors.email" class="form__error">
          {{ validationErrors.email[0] }}
        </p>
      </div>
      <div class="form__group">
        <label class="form__label">Телефон*</label>
        <input
          class="form__input"
          v-model="form.phone"
          type="tel"
          name="phone"
          required
        />
        <p v-if="validationErrors.phone" class="form__error">
          {{ validationErrors.phone[0] }}
        </p>
      </div>
    </div>
    <div class="form__group">
      <label class="form__label">Сообщение*</label>
      <textarea
        class="form__textarea"
        v-model="form.message"
        name="message"
        required
      ></textarea>
      <p v-if="frontErrors.message" class="form__error">
        {{ frontErrors.message }}
      </p>
      <p v-if="validationErrors.message" class="form__error">
        {{ validationErrors.message[0] }}
      </p>
    </div>
    <label class="form__checkbox">
      <input type="checkbox" v-model="form.agreement" required />
      Согласие на обработку персональных данных
    </label>
    <p v-if="frontErrors.agreement" class="form__error">
      {{ frontErrors.agreement }}
    </p>

    <p v-if="isSuccessResponse" class="form__success-info">
      {{ successMessage }}
    </p>
    <button class="form__button" type="submit" :disabled="loading">
      {{ loading ? 'Отправка...' : 'Обсудить проект' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { validateFeedbackForm } from '@/shared/models/validation'
import { useFeedback } from '@/widgets/feedback-form/api/useFeedback'

const form = ref({
  name: '',
  message: '',
  phone: '',
  email: '',
  agreement: false
})

const frontErrors = ref<Record<string, string>>({})
const {
  successMessage,
  loading,
  isSuccessResponse,
  error,
  validationErrors,
  submit
} = useFeedback()

async function onSubmit() {
  const errors = validateFeedbackForm(form.value)
  frontErrors.value = errors
  if (Object.keys(errors).length > 0) {
    isSuccessResponse.value = false
    return
  }

  await submit(form.value)
  if (isSuccessResponse.value) {
    form.value = {
      name: '',
      message: '',
      phone: '',
      email: '',
      agreement: false
    }
  }
}
</script>

<style lang="scss">
@import 'styles/feedback-title';
@import 'styles/form';
</style>
