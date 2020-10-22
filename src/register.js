import React from 'react';
import { addons, types } from '@storybook/addons';
import Tool from './Tool';
import { ADDON_ID, PANEL_ID } from './constants';

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    title: 'dark mode vue',
    type: types.TOOL,
    render: () => (<Tool api={api} />),
  });
});
