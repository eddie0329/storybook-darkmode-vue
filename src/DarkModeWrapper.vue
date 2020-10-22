<template>
  <div>
    <slot :is-dark-mode="isDarkMode"></slot>
  </div>
</template>

<script>
import { addons } from '@storybook/addons';
import { ADDON_ID } from './constants';

const channel = addons.getChannel();

export default {
  name: 'DarkModeWrapper',
  data: () => ({
    isDarkMode: false,
  }),
  created() {
    channel.on(ADDON_ID, (mode) => {
      this.isDarkMode = mode;
    });
  },
  beforeDestroy() {
    channel.off(ADDON_ID, () => {});
  },
};
</script>

<style>
</style>