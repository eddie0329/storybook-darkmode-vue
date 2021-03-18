import { storiesOf } from '@storybook/vue';
import DarkModeWrapper from 'storybook-darkmode-vue/DarkModeWrapper';
import DarkModeSample from './DarkModeSample';
import { addons } from '@storybook/addons';

storiesOf('Sample', module).add('sample1', () => ({
  data: () => ({}),
  components: {
    DarkModeWrapper,
    DarkModeSample,
  },
  created() {
    const channel = addons.getChannel();
    console.log(channel);
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
