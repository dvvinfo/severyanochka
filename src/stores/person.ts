import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Person } from '@/types/person'
import avatarImg from '../assets/img/avatar.png'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true)
  const person = reactive<Person>({
    name: 'Вася',
    avatar: avatarImg
  })
  const setIsAuth = (value: boolean) => {
    isAuth.value = value
  }

  return { isAuth, person, setIsAuth }
})
