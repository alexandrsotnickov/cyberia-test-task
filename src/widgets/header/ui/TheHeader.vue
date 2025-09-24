<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <a href="/" class="header__logo" aria-label="Киберия"><Logo /></a>
        <ul class="header__menu">
          <li class="header__menu-item">
            <NuxtLink to="">Агентство</NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="">Услуги</NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="/cases">Кейсы</NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="">Блог</NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__mobile">
        <a href="/" class="header__logo" aria-label="Киберия"><Logo /></a>
        <div class="burger" :class="{ active: isActive }">
          <button
            class="burger__button"
            @click="toggleBurger"
            aria-label="Бургер-меню"
          >
            <span
              class="burger__line burger__line_top"
              :class="{ white: isActive }"
            ></span>
            <span
              class="burger__line burger__line_middle"
              :class="{ white: isActive }"
            ></span>
            <span
              class="burger__line burger__line_bottom"
              :class="{ white: isActive }"
            ></span>
          </button>
          <div class="burger__content">
            <div class="burger__menu">
              <p><a href="#">Агентство</a></p>
              <p><a href="#">Услуги</a></p>
              <NuxtLink to="/cases">Кейсы</NuxtLink>
              <p><a href="#">Блог</a></p>
              <p><a href="#">Контакты</a></p>
            </div>

            <hr />
            <div class="burger__contacts">
              <div class="contacts__head">
                <p>Контакты:</p>
              </div>
              <p>+7 999 123 45 67</p>
              <p>
                <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
              </p>
              <p>ул. Ярных, д.35, оф.10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/shared/ui/Logo/Logo.vue'
import { ref } from 'vue'

const isActive = ref(false)

const toggleBurger = () => {
  isActive.value = !isActive.value
  document.body.classList.toggle('no-scroll', isActive.value)
}
</script>

<style lang="scss">
@import 'styles/header';
</style>
