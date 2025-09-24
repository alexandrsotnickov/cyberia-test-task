<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb__list">
      <li class="breadcrumb__item">
        <NuxtLink
          to="/"
          class="breadcrumb__general-link"
          :class="{ 'breadcrumb__link--secondary': route.path !== '/' }"
          >Главная</NuxtLink
        >
      </li>
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb__item"
        :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
      >
        <NuxtLink v-if="index !== breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.label }}
        </NuxtLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useBreadcrumbs } from '@/widgets/breadcrumbs/model/useBreadcrumbs'
const { breadcrumbs } = useBreadcrumbs()
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss">
@import 'styles/breadcrumb';
</style>
