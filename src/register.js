// .storybook/my-addon/register.js
import React from 'react';
import { addons, types } from '@storybook/addons';
import Tool from './Tool';
import { themes } from '@storybook/theming';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.setConfig({
  theme: themes.light,
});

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    title: 'dark mode vue',
    type: types.TOOL,
    render: () => <Tool api={api} />,
  });
});
