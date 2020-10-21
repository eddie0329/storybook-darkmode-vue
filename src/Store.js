import { themes } from '@storybook/theming';

class Store {
  constructor() {
    this.isDarkMode = false;
    this.themes = themes.dark;
    return this;
  }
  getIsDarkMode() {
    return this.isDarkMode;
  }
  getTheme() {
    return this.themes;
  }
  setIsDarkMode(bool) {
    this.isDarkMode = bool;
    if (bool) {
      this.themes = themes.dark;
    } else {
      this.themes = themes.light;
    }
    return this;
  }
}

const storeSingleton = (() => {
  let instance = null;
  const initiate = () => {
    instance = new Store();
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
