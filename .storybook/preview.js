import './storybookStyles.scss';
import React from 'react';
import {
  setAlertSendsAnalytics,
  setButtonSendsAnalytics,
  setDialogSendsAnalytics,
  setHelpDrawerSendsAnalytics,
} from '../packages/design-system/src/components/flags';
import { setHeaderSendsAnalytics } from '../packages/ds-healthcare-gov/src/components/flags';
import { setLanguage } from '../packages/design-system/src/components/i18n';
import { setLanguage as setLanguageFromPackage } from '@cmsgov/design-system';
import themes from '../themes.json';

// Rewire analytics events to log to the console
window.utag = { link: console.log };

const customViewports = {
  extraSmall: {
    name: 'Extra Small - 320px',
    styles: {
      width: '320px',
      height: '800px',
    },
  },
  small: {
    name: 'Small - 544px',
    styles: {
      width: '544px',
      height: '800px',
    },
  },
  medium: {
    name: 'Medium - 768px',
    styles: {
      width: '768px',
      height: '800px',
    },
  },
  large: {
    name: 'Large - 1024px',
    styles: {
      width: '1024px',
      height: '800px',
    },
  },
  extraLarge: {
    name: 'Extra Large - 1280px',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  language: {
    name: 'Language',
    description: 'Internationalization language',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Español' },
      ],
    },
  },
  analytics: {
    name: 'Analytics',
    description: 'Analytics settings',
    defaultValue: 'off',
    toolbar: {
      icon: 'graphline',
      items: [
        { value: 'on', left: 'Analytics', title: 'Log to Actions' },
        { value: 'off', left: 'Analytics', title: 'Off' },
      ],
    },
  },
  theme: {
    name: 'Theme',
    description: 'Current theme',
    defaultValue: 'core',
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(themes).map((key) => ({
        value: key,
        title: `${themes[key].displayName} theme`,
      })),
    },
  },
};

const baseClassDecorator = (Story, context) => {
  document.body.classList.add('ds-base');
  if (context.parameters.baseInverse) {
    document.body.classList.add('ds-base--inverse');
  } else {
    document.body.classList.remove('ds-base--inverse');
  }

  return <Story {...context} />;
};

const themeSettingDecorator = (Story, context) => {
  const { theme } = context.globals;
  document.documentElement.setAttribute('data-theme', theme);

  const themeCss = document.querySelector('link[title=themeCss]');
  themeCss.href = `${theme}-theme.css`;

  return <Story {...context} />;
};

const languageSettingDecorator = (Story, context) => {
  const { language } = context.globals;

  // Yes, this is a side-effect in a render function, but it's the most performant way
  // to avoid a flash of content in the wrong language.
  setLanguage(language);
  // In order for it to work in child design systems, which import i18n things from
  // node_modules, we need to also call this version of the function which comes from
  // our node_modules
  setLanguageFromPackage(language);

  return <Story {...context} />;
};

const analyticsSettingsDecorator = (Story, context) => {
  const { analytics } = context.globals;

  const on = analytics === 'on';

  setAlertSendsAnalytics(on);
  setButtonSendsAnalytics(on);
  setDialogSendsAnalytics(on);
  setHelpDrawerSendsAnalytics(on);
  setHeaderSendsAnalytics(on);

  return <Story {...context} />;
};

export const decorators = [
  baseClassDecorator,
  languageSettingDecorator,
  analyticsSettingsDecorator,
  themeSettingDecorator,
];
