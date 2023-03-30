import React from 'react';
import { useState } from 'react';
import LocationWidget from './LocationWidget';
import { Button } from '@cmsgov/design-system';

export default {
  title: 'Medicare/LocationWidget',
  component: LocationWidget,
  argTypes: {
    analytics: { control: false },
    children: { control: false },
    actions: { control: false },
    heading: {
      control: { type: 'text' },
      type: { name: 'string', required: true },
    },
    title: {
      control: { type: 'text' },
      type: { name: 'string', required: true },
    },
  },
  args: {
    alert: false,
    escapeExits: true,
    underlayClickExits: true,
    closeButtonVariation: 'ghost',
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam vitae metus
        lacinia, eget tempor purus placerat.
      </div>
    ),
    heading: 'Dialog Heading',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};

export const LocationWidgetExample = ({ ...args }) => {
  return (
    <>
      <LocationWidget
        {...args}
        getApplicationNode={() => document.getElementById('storybook-preview-iframe')}
        actions={
          <>
            <button className="ds-c-button ds-c-button--solid ds-u-margin-right--1" key="solid">
              LocationWidget action
            </button>
            <button className="ds-c-button ds-c-button--ghost" key="cancel">
              Cancel
            </button>
          </>
        }
      />
    </>
  );
};
