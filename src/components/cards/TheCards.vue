<script setup lang="ts">
import { toRefs } from 'vue'
import TheContainer from '../TheContainer.vue'
import TheTypography from '../ui/TheTypography.vue'
import TheButton from '../ui/TheButton.vue'
import TheIcon from '../TheIcon.vue'
import ProductCard from './ProductCard.vue'
import productImg from '@/assets/img/products/product-1.png'
import TheLike from '../TheLike.vue'
import TheBadge from '../TheBadge.vue'

const props = defineProps<{
  title: string
  linkText: string
  linkHref: string
}>()
const { title, linkText } = toRefs(props)
const products = [
  {
    img: productImg,
    name: 'Product 1',
    sale: -50
  }
]
</script>

<template>
  <section class="cards">
    <TheContainer>
      <div class="cards__header">
        <TheTypography tag-name="h3" bold>{{ title }}</TheTypography>
        <div class="cards__button-wrapper">
          <TheButton color="white" class="cards__button">
            <RouterLink class="cards__link" :to="linkHref"
              ><TheTypography tag-name="span">{{ linkText }} </TheTypography>
              <TheIcon type="chevron" />
            </RouterLink>
          </TheButton>
        </div>
      </div>
      <div class="cards__list">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :img="product.img"
          :name="product.name"
          :sale="product.sale"
        >
        <template v-slot:headerTopRight>
          <TheLike/>
        </template>
        <template v-if="product.sale" v-slot:headerBottomLeft>
          <TheBadge>{{ product.sale }} %</TheBadge>
        </template>
      </ProductCard>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  padding: 80px 0;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__button-wrapper {
    min-width: 168px;
  }

  &__button {
    width: max-content;
  }

  &__link {
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    &:deep(svg) {
      transform: rotate(-90deg);
    }
  }
  &__list {
    margin-top: 40px;
  }
}
</style>
