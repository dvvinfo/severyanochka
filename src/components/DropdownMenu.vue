<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCatalogStore } from '@/stores/catalog'
import TheContainer from './TheContainer.vue'
import TheTypography from './ui/TheTypography.vue'

const catalogStore = useCatalogStore()
const { CatalogSections } = catalogStore
</script>

<template>
  <div class="dropdown-menu">
    <TheContainer>
      <ul class="dropdown-menu__list">
        <li v-for="section in CatalogSections" :key="section.label" class="dropdown-menu__item">
          <RouterLink :to="section.link" class="dropdown-menu__link">
            <TheTypography tag-name="span" size="sm" bold class="dropdown-menu__text">
              {{ section.label }}
            </TheTypography>
          </RouterLink>
        </li>
      </ul>
    </TheContainer>
  </div>
</template>

<style scoped lang="scss">
.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  background-color: var(--main-surface);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  animation: 0.5s 1 forwards slideDown;
  opacity: 0;
  &__list {
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 40px;
  }
  &__text {
    transition: color 0.3s;
    &:hover {
      color: var(--main-primary);
    }
  }
}
@keyframes slideDown {
  from {
    opacity: 0;
    top: 0;
  }
  to {
    opacity: 1;
    top: 72px;
  }
}
</style>
