import { useState, useEffect } from 'react';
import { getQueryParamValue, setQueryParam } from './urlUtils';
import { LocationInterface } from './graphQLTypes';

const STORAGE_TOKEN_NAME = 'cmsds_theme';
const QUERY_PARAM_NAME = 'theme';

/**
 * Checks for current theme using query params and then localStorage
 * in that order. If neither is detected, set localStorage to 'core'
 * and return 'core. If either is found, set localStorage if needed
 * and return found value
 */
function useTheme(location: LocationInterface) {
  const [theme, setTheme] = useState(getQueryParamValue(location, QUERY_PARAM_NAME) ?? 'core');

  useEffect(() => {
    const themeQueryParam = getQueryParamValue(location, QUERY_PARAM_NAME);

    if (typeof window !== 'undefined') {
      // query param found, set in local storage and return it
      if (themeQueryParam !== null) {
        localStorage.setItem(STORAGE_TOKEN_NAME, themeQueryParam);
        if (theme !== themeQueryParam) setTheme(themeQueryParam);
      } else {
        let newTheme = 'core';
        // no query param, so check localStorage theme. if found, return otherwise return 'core'
        if (STORAGE_TOKEN_NAME in localStorage) {
          newTheme = localStorage.getItem(STORAGE_TOKEN_NAME);
        }
        // if no query param val was set, make sure to set it to the value in local storage or 'core' by default
        setQueryParam(QUERY_PARAM_NAME, newTheme);
        setTheme(newTheme);
      }
    }
  }, []);

  return theme;
}

export default useTheme;
