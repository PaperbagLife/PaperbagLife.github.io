<script setup lang="ts">
import { onMounted, ref } from 'vue'
</script>
<template>
  <main>
    <div class="col">
      <svg
        class="svg-container"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- White background -->
        <rect width="100%" height="100%" fill="white" />

        <!-- Red ball in center -->
        <circle cx="800" cy="450" r="50" fill="black" />
      </svg>
    </div>
  </main>
</template>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.svg-container {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
