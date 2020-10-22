import React from 'react';
import { IconButton } from '@storybook/components';
import { themes } from '@storybook/theming';
import {
  STORY_CHANGED,
  SET_STORIES,
  DOCS_RENDERED,
} from '@storybook/core-events';
import { ADDON_ID } from './constants';
import Sun from './Sun';
import Moon from './Moon';

const { useState, useEffect, useCallback } = React;

function Tool({ api }) {
  // inital state should always be false;
  const [isDarkMode, setDarkMode] = useState(false);

  const setMode = useCallback((mode) => {
    setDarkMode(mode);
    api.setOptions({ theme: mode ? themes.dark : themes.light });
    api.getChannel().emit(ADDON_ID, mode);
  });

  const invertMode = useCallback(() => {
    const changedState = !isDarkMode;
    setMode(changedState);
  });

  useEffect(() => {
    const channel = api.getChannel();
    // channel.on(STORY_CHANGED, setMode(isDarkMode));
    // channel.on(SET_STORIES, setMode(isDarkMode));
    // channel.on(DOCS_RENDERED, setMode(isDarkMode));
    return () => {
      // channel.removeListener(STORY_CHANGED, setMode(isDarkMode));
      // channel.removeListener(SET_STORIES, setMode(isDarkMode));
      // channel.removeListener(DOCS_RENDERED, setMode(isDarkMode));
    };
  });

  return (
    <IconButton active={isDarkMode} onClick={invertMode}>
      {isDarkMode ? <Moon /> : <Sun />}
    </IconButton>
  );
}

export default Tool;
