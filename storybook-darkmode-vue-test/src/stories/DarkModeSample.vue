<template>
  <div class="card" :class="isDarkMode ? 'dark-mode' : 'light-mode'"></div>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.card {
  width: 200px;
  height: 300px;
}
.dark-mode {
  background: pink;
}

.light-mode {
  background: blueviolet;
}
</style>