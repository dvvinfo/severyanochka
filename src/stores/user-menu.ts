import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { UserMenu } from '@/types/user-menu'

export const useUserMenuStore = defineStore('user-menu', () => {
  let menu = reactive<UserMenu>([
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: 'logout' }
  ])
  const setMenu = (newMenu: UserMenu) => {
    menu = newMenu
  }

  return { menu, setMenu }
})
