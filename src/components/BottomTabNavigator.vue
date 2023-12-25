<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/stores/person'
import UserMenu from '@/components/UserMenu.vue'
import TheButton from '@/components/ui/TheButton.vue'
import TheIcon from '@/components/TheIcon.vue'
import TheNavigation from '@/components/TheNavigation.vue'
import TheContainer from './TheContainer.vue'

const personStore = usePersonStore()
const { person, isAuth } = storeToRefs(personStore)
const { setIsAuth } = personStore

const userMenu = reactive({
  name: person.value.name,
  avatar: person.value.avatar,
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: 'logout' }
  ]
})
const navItems = reactive([
  { label: 'Каталог', icon: 'menu', count: 0, link: '/catalog' },
  { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorites' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'cart', count: 1, link: '/cart' }
])
const login = () => {
  setIsAuth(true)
}
</script>

<template>
  <div class="bottom-tab-navigator">
    <TheContainer>
      <div class="bottom-tab-navigator__content">
        <TheNavigation :data="navItems" />
        <UserMenu v-if="isAuth" :data="userMenu" />
        <TheButton v-else color="primary" class="bottom-tab-navigator__login-btn" @click="login">
          <template v-slot:rightIcon>
            <TheIcon type="login" />
          </template>
          Войти</TheButton
        >
      </div>
    </TheContainer>
  </div>
</template>

<style scoped lang="scss">
.bottom-tab-navigator {
  width: 100%;
  height: 56px;
  display: none;
  box-shadow: var(--shadow-default-s);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 16px;
  background-color: var(--main-surface);
  @media screen and (max-width: 767px) {
    display: flex;
  }
  &__content {
    display: grid;
    grid-template-columns:1fr max-content;
    gap: 7%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &:deep(.header-navigation__list) {
    justify-content: space-between;
  }
  &:deep(.user-menu) {
    padding: 5px;
  }
  &:deep(.header-navigation__list svg path) {
    fill: var(--main-on-surface);
  }
  &:deep(.header-navigation__link) {
    gap: 4px;
  }
}
</style>
