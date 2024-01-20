<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import TheCards from '@/components/cards/TheCards.vue'
import TheSlider from '@/components/TheSlider.vue'

const sliders = [
  { text: 'Доставка бесплатно от 1000 ₽', img: '/img/sliders/img.png' },
  { text: 'Доставка платно', img: '' }
]
</script>

<template>
  <MainLayout>
    <section class="main-slider">
      <TheSlider :sliders="sliders" />
    </section>
    <TheCards title="Акции" link-text="Все акции" link-href="/" />
  </MainLayout>
</template>

<style scoped lang="scss">
.main-slider {
  background: url('/img/bg-slider.png') no-repeat center;
  background-size: cover;
}
</style>
