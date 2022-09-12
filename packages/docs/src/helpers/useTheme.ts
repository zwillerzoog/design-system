import { useState, useEffect } from 'react';
import { getThemeFromPath, addThemePath } from './urlUtils';
import { LocationInterface } from './graphQLTypes';

const STORAGE_TOKEN_NAME = 'cmsds_theme';

/**
 * Checks for current theme using query params and then localStorage
 * in that order. If neither is detected, set localStorage to 'core'
 * and return 'core. If either is found, set localStorage if needed
 * and return found value
 */
function useTheme(location: LocationInterface) {
  const [theme, setTheme] = useState(getThemeFromPath(location) ?? 'core');
  console.log(getThemeFromPath(location));

  useEffect(() => {
    const themeFromLocation = getThemeFromPath(location);
    console.log(`themeFromLocation: ${themeFromLocation}`);

    if (typeof window !== 'undefined') {
      if (themeFromLocation) {
        // Found a theme in the path, so set in local storage and return it
        localStorage.setItem(STORAGE_TOKEN_NAME, themeFromLocation);
        if (theme !== themeFromLocation) {
          setTheme(themeFromLocation);
        }
      } else {
        // No theme found in the path, so check localStorage or fall back to default
        let newTheme = 'core';
        const localStorageTheme = localStorage.getItem(STORAGE_TOKEN_NAME);
        if (['core', 'healthcare', 'medicare'].includes(localStorageTheme)) {
          newTheme = localStorageTheme;
        }
        // Add it to the path and set locally
        addThemePath(newTheme);
        setTheme(newTheme);
        localStorage.setItem(STORAGE_TOKEN_NAME, newTheme);
      }
    }
  }, []);

  return theme;
}

export default useTheme;
