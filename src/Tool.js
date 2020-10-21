import React from 'react';
import { IconButton } from '@storybook/components';
import { themes } from '@storybook/theming';
import {
  STORY_CHANGED,
  SET_STORIES,
  DOCS_RENDERED,
} from '@storybook/core-events';

const { useState, useEffect, useCallback } = React;

function DarkMode({ api }) {
  // inital state should always be false;
  const [isDarkMode, setDarkMode] = useState(false);

  // const setMode = useCallback((mode) => {}, []);

  const setMode = useCallback(() => {
    const changedState = !isDarkMode;
    setDarkMode(changedState);
    api.setOptions({ themes: changedState ? themes.dark : themes.light });
    api.getChannel().emit('DARK_MODE_VUE', changedState);
  });

  useEffect(() => {
    const channel = api.getChannel();
    return () => {};
  });

  return (
    <IconButton active={isDarkMode} onClick={setMode}>
      {isDarkMode ? 'DARK' : 'LIGHT'}
    </IconButton>
  );
}

export default DarkMode;
