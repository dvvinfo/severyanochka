<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import BottomTabNavigator from './BottomTabNavigator.vue'
import TheFooter from './TheFooter.vue'
</script>

<template>
  <TheHeader />
  <BottomTabNavigator />
  <main class="main">
    <slot />
  </main>
  <TheFooter />
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - 126px - 72px);
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 262px - 72px)
  }
}
</style>
