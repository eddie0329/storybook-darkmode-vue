// .storybook/my-addon/register.js
import React from 'react';
import { addons, types } from '@storybook/addons';
import Tool from './Tool';
import { IconButton } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

// const onClickIconButton = ({ api }) => {
//   Store.setIsDarkMode(!Store.getIsDarkMode());
//   addons.setConfig({
//     theme: Store.getIsDarkMode() ? themes.dark : themes.light,
//   });
//   console.log(api);
// };

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    title: 'dark mode vue',
    type: types.TOOL,
    render: () => <Tool api={api} />,
  });
});
