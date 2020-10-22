import React from 'react';
import { IconButton } from '@storybook/components';
import { ADDON_ID } from './constants';
import Sun from './Sun';
import Moon from './Moon';
import Store from './Store';

function Tool({ api }) {
  const { useState, useCallback, useEffect } = React;
  const [isDarkMode, setDarkMode] = useState(Store.getIsDarkMode());

  const renderTheme = useCallback((mode) => {
    api.setOptions({ theme: Store.getThemes()[mode] });
    api.getChannel().emit(ADDON_ID, mode);
  });

  const setMode = useCallback((mode) => {
    setDarkMode(mode);
    Store.setIsDarkMode(mode);
    renderTheme(mode);
  });

  const invertMode = useCallback(() => {
    const changedState = !isDarkMode;
    setMode(changedState);
  });

  useEffect(() => {
    renderTheme(isDarkMode);
  });

  return (
    <IconButton active={isDarkMode} onClick={invertMode}>
      {isDarkMode ? <Moon /> : <Sun />}
    </IconButton>
  );
}

export default Tool;
