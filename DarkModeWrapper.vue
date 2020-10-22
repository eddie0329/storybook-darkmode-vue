<template>
  <div>
    <slot :is-dark-mode="isDarkMode"></slot>
  </div>
</template>

<script>
import { addons } from '@storybook/addons';

const channel = addons.getChannel();

export default {
  name: 'DarkModeWrapper',
  data: () => ({
    isDarkMode: false,
  }),
  created() {
    channel.on('STORYBOOK_DARK_MODE_VUE', (mode) => {
      this.isDarkMode = mode;
    });
  },
  beforeDestroy() {
    channel.off('STORYBOOK_DARK_MODE_VUE', () => {});
  },
};
</script>

<style>
</style>