// .storybook/my-addon/register.js
import React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: 'My Addon',
    render: ({ active, key }) => (
      <IconButton active={active} key={key}>
        Hello
      </IconButton>
    ),
  });
});
