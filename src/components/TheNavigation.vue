<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheTypography from './ui/TheTypography.vue';
import TheIcon from './TheIcon.vue';
interface Props {
  data: {
    label: string
    icon: string
    count: number
    link: string
  }[]
}
const { data } = defineProps<Props>()
</script>

<template>
  <nav class="header-navigation__nav">
    <ul class="header-navigation__list">
      <li v-for="item in data" :key="item.label" class="header-navigation__item">
        <RouterLink :to="item.link" class="header-navigation__link">
            <TheIcon :type="item.icon"/>
            <TheTypography tag-name="span" size="xs">{{ item.label }}</TheTypography>
            <span v-if="item.count > 0" class="header-navigation__count">{{ item.count }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header-navigation{
    &__list{
        display: flex;
        align-items: center;
        gap: 24px;
    }
    &__item{
        position: relative;
        color: var(--main-on-surface) ;
    }
    &__link{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: var(--main-on-surface) ;
    }
    &__count{
        width: 12px;
        height: 12px;
        position: absolute;
        top: -6px;
        right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-on-primary);
        background-color: var(--main-primary);
        border-radius: 4px;
        font-size: 12px;
    }
}
</style>
