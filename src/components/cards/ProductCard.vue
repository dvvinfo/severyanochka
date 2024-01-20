<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  img: string
  name: string
  sale?:number
}>()
const { img, name,sale } = toRefs(props)
</script>

<template>
  <article class="product-card">
    <div class="product-card__img">
      <div class="product-card__top-right">
        <slot name="headerTopRight"></slot>
      </div>
      <div class="product-card__top-left">
        <slot name="headerTopLeft"></slot>
      </div>

      <img :src="img" alt="" />
      <div class="product-card__bottom-left">
        <slot name="headerBottomLeft"></slot>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.product-card {
  width: max-content;
  &__top-right {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  &__top-left {
    position: absolute;
    top: 8px;
    left: 8px;
  }
  &__img {
    height: 160px;
    position: relative;
  }
  &__bottom-left {
    position: absolute;
    bottom: 10px;
    left: 0;
  }
}
</style>
