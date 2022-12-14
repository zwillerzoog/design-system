import React from 'react';
import SingleInputDateField from './SingleInputDateField';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'Components/SingleInputDateField',
  component: SingleInputDateField,
  argTypes: {
    errorMessage: {
      control: { type: 'text' },
    },
    errorPlacement: {
      defaultValue: 'top',
      control: {
        type: 'radio',
      },
      options: ['top', 'bottom'],
    },
    hint: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    requirementLabel: {
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Birthday',
    hint: 'Please enter your birthday',
    name: 'single-input-date-field',
  },
};

const Template = ({ ...args }) => {
  const [dateString, setDateString] = useState('');
  const onChange = (...params) => {
    action('onChange')(...params);
    setDateString(...params);
  };
  return <SingleInputDateField {...args} value={dateString} onChange={onChange} />;
};

export const Default = Template.bind({});

export const WithPicker = Template.bind({});
WithPicker.args = {
  label: 'What day did you move?',
  hint: 'This date should be within the past 60 days in order to qualify',
  fromYear: new Date().getFullYear(),
  toDate: new Date(),
};

export const WithError = Template.bind({});
WithError.args = {
  ...WithPicker.args,
  errorMessage: 'Example error message',
};
