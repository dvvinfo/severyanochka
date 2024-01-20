<script setup lang="ts">
import TheIcon from './TheIcon.vue'
import TheButton from './ui/TheButton.vue'
</script>

<template>
  <TheButton class="like" color="transparent">
    <TheIcon type="like" />
  </TheButton>
</template>

<style lang="scss" scoped>
.like {
  opacity: 0.5;
  cursor: pointer;
}
</style>
