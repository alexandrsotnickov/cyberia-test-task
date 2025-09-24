<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__brand">
        <div class="footer__logo">
          <a href="/" aria-label="Киберия"><Logo /></a>
        </div>
        <p class="footer__tagline">Веб-разработка и<br />усиление IT-команд</p>
      </div>
      <div class="footer__columns">
        <ul class="footer__col">
          <li>+7 999 123 45 67</li>
          <li>hello@cyberia.studio</li>
          <li>ул. Ярных, д.35, оф.10</li>
        </ul>
        <ul class="footer__col">
          <li><a href="#">Агентство</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Кейсы</a></li>
        </ul>
        <ul class="footer__col">
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import 'styles/footer';
</style>

<script setup>
import Logo from '@/shared/ui/Logo/Logo.vue'
</script>
