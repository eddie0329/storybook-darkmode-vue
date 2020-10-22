import { storiesOf } from '@storybook/vue';
import DarkModeWrapper from 'storybook-darkmode-vue/DarkModeWrapper';
import DarkModeSample from './DarkModeSample';

storiesOf('Sample', module).add('sample1', () => ({
  data: () => ({}),
  components: {
    DarkModeWrapper,
    DarkModeSample,
  },
  methods: {},
  template: `
    <div>
      <DarkModeWrapper v-slot="{isDarkMode}">
        <DarkModeSample :is-dark-mode="isDarkMode"/>
      </DarkModeWrapper>
    </div>
  `,
}));
