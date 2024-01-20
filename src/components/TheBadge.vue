<script setup lang="ts">
import TheTypography from './ui/TheTypography.vue'
</script>

<template>
  <div class="badge">
    <TheTypography tag-name="span" size="sm" white><slot></slot></TheTypography>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--main-primary);
  color: var(--main-on-primary);
}
</style>
