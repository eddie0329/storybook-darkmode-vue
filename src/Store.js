import { themes } from '@storybook/theming';
import { ADDON_ID, DARK, LIGHT } from './constants';

class Store {
  constructor(mode) {
    this.isDarkMode = mode;
    this.themes = { [DARK]: themes.dark, [LIGHT]: themes.light };
    return this;
  }
  getIsDarkMode() {
    return this.isDarkMode;
  }
  getThemes() {
    return this.themes;
  }
  setIsDarkMode(mode) {
    this.isDarkMode = mode;
    window.localStorage.setItem(ADDON_ID, mode);
    return this;
  }
}

const storeSingleton = (() => {
  let instance = null;
  let localStorageIsDark = JSON.parse(window.localStorage.getItem(ADDON_ID));
  const initiate = () => {
    if (localStorageIsDark === null) {
      localStorageIsDark = false;
      window.localStorage.setItem(ADDON_ID, false);
    }
    instance = new Store(localStorageIsDark);
  };
  return {
    getInstance: () => {
      if (!instance) {
        initiate();
      }
      return instance;
    },
  };
})();

export default storeSingleton.getInstance();
