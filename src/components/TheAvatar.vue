<script setup lang="ts">
interface Props {
  img: string
}
const { img } = defineProps<Props>()
</script>

<template>
  <div class="avatar">
    <img class="avatar__img" :src="img" alt="avatar" />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
