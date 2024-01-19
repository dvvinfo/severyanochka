<script setup lang="ts">
import { toRefs } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import TheTypography from './ui/TheTypography.vue'
import TheContainer from './TheContainer.vue'

const props = defineProps<{
  sliders: {
    text: string
    href?: string
    img?: string
  }[]
}>()
const { sliders } = toRefs(props)
</script>

<template>
  <div class="slider">
    <TheContainer>
      <carousel :items-to-show="1" wrap-around :autoplay="3000">
        <slide v-for="slide in sliders" :key="slide.text">
          <div class="slide" :style="slide.href ? { cursor: 'pointer' } : ''">
            <div class="slide__img" v-if="slide.img !== ''">
              <img :src="slide.img" alt="" />
            </div>
            <TheTypography
              class="slide__title"
              tag-name="h2"
              bold
              :style="slide.img === '' ? { width: '100%', textAlign: 'center' } : ''"
              >{{ slide.text }}</TheTypography
            >
          </div>
        </slide>
      </carousel>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  max-width: 1072px;
  width: 100%;
  margin: 0 auto;

  padding: 4px 0;
}
.slide {
  display: flex;
  align-items: center;
  height: 200px;
  gap: 18px;
  width: 100%;
  @media screen and (max-width: 1207px) {
    height: 168px;
  }
  @media screen and (max-width: 767px) {
    height: 80px;
  }
  &__img {
    max-width: 303px;
    width: 100%;
    @media screen and (max-width: 1207px) {
        max-width: 198px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    img {
      width: 100%;
    }
  }
  &__title {
    @media screen and (max-width: 1207px) {
        font-size: 24px;
    }
    @media screen and (max-width: 767px) {
      text-align: center;
      width: 100%;
      font-size: 18px;
    }
  }
}
.full {
  .slide__title {
    width: 100%;
    text-align: center;
  }
}
</style>
