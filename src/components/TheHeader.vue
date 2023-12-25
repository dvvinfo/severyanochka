
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePersonStore } from '../stores/person'
import { useScreenStore } from '../stores/screen'
import TheContainer from './TheContainer.vue'
import TheIcon from './TheIcon.vue'
import TheLogo from './TheLogo.vue'
import TheButton from './ui/TheButton.vue'
import TheInput from './ui/TheInput.vue'
import TheNavigation from './TheNavigation.vue'
import UserMenu from './UserMenu.vue'
import DropdownMenu from './DropdownMenu.vue'

const screenStore = useScreenStore()
const { platform } = storeToRefs(screenStore)
const personStore = usePersonStore()
const { person, isAuth } = storeToRefs(personStore)
const { setIsAuth } = personStore

const modelValue = ref('')
const navItems = ref([
  { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorites' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'cart', count: 1, link: '/cart' }
])

const userMenu = ref({
  name: person.value.name,
  avatar: person.value.avatar,
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: 'logout' }
  ]
})
const dropdownIsHidden = ref<boolean>(true)

const toggleDropdown = () => {
  dropdownIsHidden.value = !dropdownIsHidden.value
}

const login = () => {
  setIsAuth(true)
}
</script>

<template>
  <header class="header">
    <div class="header__content">
      <TheContainer class="header__container">
        <RouterLink to="/">
        <TheLogo
        class="header__logo"
          orientation="horizontal"
          bg-color="white"
          color-ful
          :with-text="platform === 'desktop'"
        />
      </RouterLink>
        <div class="header__catalog">
          <TheButton @mouseenter="toggleDropdown" class="header__catalog-btn" color="secondary">
            <template v-slot:leftIcon>
              <TheIcon type="menu" />
            </template>
            Каталог
          </TheButton>
        </div>
        <div class="header__search">
          <TheInput size="sm" placeholder="Поиск" v-model:value="modelValue">
            <template #rightIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z"
                  fill="#414141"
                />
              </svg>
            </template>
          </TheInput>
        </div>
        <div class="header__navigation">
          <TheNavigation :data="navItems" />
        </div>
        <div class="header__user-menu">
          <UserMenu v-if="isAuth" :data="userMenu" />
          <TheButton v-else color="primary" class="header__login-btn" @click="login">
            <template v-slot:rightIcon>
              <TheIcon type="login" />
            </template>
            Войти</TheButton
          >
        </div>
      </TheContainer>
    </div>
      <DropdownMenu v-if="!dropdownIsHidden" @mouseleave="toggleDropdown" />
  </header>
</template>



<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--main-surface);

  &__content {
    width: 100%;
    position: relative;
    z-index: 1;
    box-shadow: var(--shadow-default-s);
    background-color: var(--main-surface);
  }
  &__container {
    display: flex;
    align-items: center;
    height: 80px;
    gap: 16px;
  }
  &__catalog {
    width: 140px;
    margin-left: 26px;
    color: var(--main-surface);
    @media screen and (max-width: 1200px) {
      width: unset;
      margin-left: 4px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    &:deep(.typography) {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    &:deep(.button) {
      @media screen and (max-width: 1200px) {
        width: max-content;
      }
    }
  }
  &__catalog-btn {
    color: var(--main-surface);
  }
  &__search {
    max-width: 374px;
    width: 100%;
    @media screen and (max-width: 1200px) {
     
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &__navigation {
    margin-left: 26px;
    @media screen and (max-width: 1200px) {
      margin-left: 4px;
    }
    @media screen and (max-width: 767px) {
        display: none;
      }
  }
  &__user-menu {
    width: 217px;
    @media screen and (max-width: 1200px) {
      width: unset;
    }
    @media screen and (max-width: 767px) {
        display: none;
      }
  }
  &__login-btn {
    max-width: 157px;
    width: 100%;
    &:deep(.typography) {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
