<script setup lang="ts">
import TheHeader from '../TheHeader.vue'
import BottomTabNavigator from '../BottomTabNavigator.vue'
import TheFooter from '../TheFooter.vue'
import TheSlider from '../TheSlider.vue'

const sliders = [
  { text: 'Доставка бесплатно от 1000 ₽', img: '/img/sliders/img.png' },
  { text: 'Доставка платно', img: '' }
]
</script>

<template>
  <TheHeader />
  <BottomTabNavigator />
  <main class="main">
    <section class="main-slider">
      <TheSlider :sliders="sliders" />
    </section>
    <slot />
  </main>
  <TheFooter />
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - 126px - 72px);
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 262px - 72px);
  }
  .main-slider{
    background: url('/img/bg-slider.png') no-repeat center;
    background-size: cover;
  }
}
</style>
