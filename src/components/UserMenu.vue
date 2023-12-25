<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { usePersonStore } from '../stores/person'
import TheAvatar from './TheAvatar.vue'
import TheIcon from './TheIcon.vue'
import TheButton from './ui/TheButton.vue'
import TheTypography from './ui/TheTypography.vue'

interface Props {
  data: {
    name: string
    avatar: string
    menu: { label: string; link?: string; action?: string }[]
  }
}

const personStore = usePersonStore()
const { setIsAuth } = personStore

const { data } = defineProps<Props>()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const onClickItem = (action: string) => {
  console.log(action)
  if (action === 'logout') {
    setIsAuth(false)
  }
}
</script>

<template>
  <div :class="['user-menu', `is-open__${isOpen}`]">
    <TheAvatar class="user-menu__avatar" :img="data.avatar" @click="toggleMenu" />
    <TheTypography class="user-menu__name" tag-name="span" size="sm" @click="toggleMenu">{{
      data.name
    }}</TheTypography>
    <TheButton class="user-menu__button" decoration="none" color="white" @click="toggleMenu">
      <template v-slot:leftIcon>
        <TheIcon type="chevron"></TheIcon>
      </template>
    </TheButton>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="user-menu__item">
        <RouterLink v-if="item.link" :to="item.link" class="user-menu__link">{{
          item.label
        }}</RouterLink>
        <TheTypography
          v-else
          tag-name="span"
          size="md"
          class="user-menu__text"
          @click="onClickItem(item.action)"
          >{{ item.label }}</TheTypography
        >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  column-gap: 10px;
  padding: 8px;
  position: relative;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  &__avatar {
    cursor: pointer;
  }
  &__name {
    cursor: pointer;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__button {
    cursor: pointer;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__list {
    display: grid;
    gap: 10px;
    grid-column: 1/4;
    position: absolute;
    top: 56px;
    left: -8px;
    right: 0;
    padding: 8px 0;
    width: 217px;
    background-color: var(--main-surface);
    box-shadow: var(--shadow-default-m);
    @media screen and (max-width: 1200px) {
      grid-column: unset;
      justify-content: end;
      width: max-content;
      padding: 8px 10px;
      left: -49px;
    }
    @media screen and (max-width: 767px) {
      top: -90px;
      left: -55px;
    }
  }
  &__link {
    text-decoration: none;
    font-size: 16px;
  }
  &__item {
    padding: 0 8px;
  }
  &__link {
    color: var(--main-on-surface);
  }
  &__text {
    cursor: pointer;
    font-size: 16px;
  }
}
.is-open__true {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-m);
}
</style>
