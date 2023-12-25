<script setup lang="ts">
import { ref, useSlots } from 'vue'
import TheTypography from './TheTypography.vue'

interface Props {
  placeholder?: string
  label?: string
  disabled?: boolean
  size: 'sm' | 'lg',
  value?: string
}
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()
const slots = useSlots()
const focus = ref(false)
const props = defineProps<Props>()
const { placeholder = '', label = '', disabled = false, size = 'sm' } = props


const updateValue = (event:any) => {
  emit("update:value", event.target.value);
  console.log(event.target.value)
};
</script>

<template>
  <div
    :class="[
      'field',
      `disabled__${disabled}`,
      `left-icon__${Boolean(slots.leftIcon)}`,
      `right-icon__${Boolean(slots.rightIcon)}`,
      `size__${size}`,
      {
        'field-focus': focus
      }
    ]"
  >
    <TheTypography v-if="label" class="field__label" tag-name="span" size="sm">
      {{ label }}
    </TheTypography>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__left-icon">
        <slot name="leftIcon"></slot>
      </div>
      <input
        :class="[
          'field__input',
          {
            'field__input-focus': focus
          }
        ]"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="focus = !focus"
        @blur="focus = !focus"
        :value="value"
        @input="updateValue"
        @keyup="updateValue"
        
      />
      <div v-if="slots.rightIcon" class="field__right-icon">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field {
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background-color: var(--main-surface);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid var(--primary);
  }
  &__container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__label {
    color: var(--grayscale-hard);
  }
  &__input {
    width: 100%;
    border: none;
    color: var(--main-on-surface);
    &::placeholder {
      color: var(--grayscale-hard);
    }
    &:focus {
      outline: none;
    }
  }
  &__left-icon,
  &__right-icon {
    height: 24px;
    display: flex;
    align-items: center;
    justify-self: center;
  }
}
.field-focus {
  border: 1px solid var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
}
.field__input-focus {
  caret-color: var(--main-secondary);
}
.size {
  &__sm {
    padding: 8px 16px;
    font-size: 16px;
  }
  &__lg {
    padding: 12px 16px;
    font-size: 24px;
  }
}
.disabled__true{
  background-color: var(--grayscale-lightest);
}
</style>
