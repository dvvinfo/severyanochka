<script setup lang="ts">
import { useSlots } from 'vue'
import TheTypography from './TheTypography.vue'

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error' | 'white' | 'transparent'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'l' | 'm' | 's'
  disabled?: boolean
}
const slots = useSlots()
const props = defineProps<Props>()
const { color = 'primary', decoration = 'default', size = 'm', disabled = false } = props
const classes = ['button', `size__${size}`, `color__${color}`, `decoration__${decoration}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon" />
    <TheTypography v-if="slots.default" class="button__text" tag-name="span" size="sm"
      ><slot />
    </TheTypography>
    <slot name="rightIcon" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  &__text {
    width: 100%;
    text-align: center;
  }
  svg {
    flex-shrink: 0;
  }
}
.button.size__m {
  padding: 8px;
  gap: 8px;
}
.button.color__transparent{
  background-color: transparent;
}
.button.color__white {
  background-color: var(--main-surface);
  color: var(--main-on-surface);
}
.button.color__secondary {
  background-color: var(--main-secondary);
  color: var(--main-surface);
  .button__text {
    color: var(--main-surface);
  }
}
.button.color__primary {
  background-color: var(--main-primary);
  color: var(--main-surface);
  .button__text {
    color: var(--main-surface);
  }
}
.decoration {
  &__none {
    background-color: unset;
    border-color: unset;
    &:deep(path) {
      fill: var(--main-on-surface);
    }
  }
}
</style>
