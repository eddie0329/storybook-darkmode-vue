import React from 'react';
import { IconButton } from '@storybook/components';

const { useState } = React;

function DarkMode({ api }) {
  // inital state should always be false;
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <IconButton active={isDarkMode}>{isDarkMode ? 'DARK' : 'LIGHT'}</IconButton>
  );
}

export default DarkMode;
