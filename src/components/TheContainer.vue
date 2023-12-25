<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    max-width: 768px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    max-width: 336px;
  }
}
</style>
