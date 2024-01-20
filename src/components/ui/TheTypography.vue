<template>
  <component
    :is="tagName"
    :class="[
      'typography',
      size ? `size__${size}` : '',
      bold ? 'bold' : '',
      white? 'white' : '',
      `tag__${tagName}`
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bold?: boolean
  white?: boolean
}

const props = defineProps<Props>()
const { tagName, size, bold } = props
</script>

<style lang="scss" scoped>
.typography {
  font-style: normal;
  line-height: 150%;
   color: var(--main-on-surface);
}
.xs {
  font-size: 12px;
}
.size {
  &__xs {
    font-size: 12px;
  }
  &__sm {
    font-size: 16px;
  }
  &__md {
    font-size: 18px;
  }
  &__lg {
    font-size: 24px;
  }
  &__xl {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    &__xs {
      font-size: 8px;
    }
    &__sm {
      font-size: 12px;
    }
    &__md {
      font-size: 14px;
    }
    &__lg {
      font-size: 20px;
    }
    &__xl {
      font-size: 32px;
    }
  }
}
.bold {
  font-weight: 700;
}
.white {
  color: var(--main-on-primary);
}
.tag {
  &__h1 {
    font-size: 64px;
  }
  &__h2 {
    font-size: 48px;
  }
  &__h3 {
    font-size: 36px;
  }
  &__h4 {
    font-size: 24px;
  }
  &__h5 {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    &__h1 {
      font-size: 48px;
    }
    &__h2 {
      font-size: 36px;
    }
    &__h3 {
      font-size: 24px;
    }
    &__h4 {
      font-size: 20px;
    }
    &__h5 {
      font-size: 16px;
    }
  }
}
</style>
