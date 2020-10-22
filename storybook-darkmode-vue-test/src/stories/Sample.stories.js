import { storiesOf } from '@storybook/vue';
import DarkModeWrapper from '../../../src/DarkModeWrapper';

storiesOf('Sample', module).add('sample1', () => ({
  data: () => ({}),
  components: {
    DarkModeWrapper,
  },
  methods: {},
  template: `
    <div>
      <DarkModeWrapper v-slot="{isDarkMode}">
        {{isDarkMode}}
      </DarkModeWrapper>
    </div>
  `,
}));
