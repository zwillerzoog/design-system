import React, { useState } from 'react';

export type MaskFunction = (rawInput: string, valueOnly?: boolean) => string;

export const RE_DATE = /^(\d{1,2})[\D]?(\d{1,2})?[\D]?(\d{1,4})?/;

/**
 * Takes the string value from an input and returns a string
 * with appropriate date format masking applied concatenated
 * with the date hint text, MM/DD/YYYY.
 *
 * `valueOnly` defaults to false. If true, returns formatted
 * string without additional hint text.
 */
export const DATE_MASK: MaskFunction = (rawInput = '', valueOnly = false) => {
  const match = RE_DATE.exec(rawInput);
  let formattedDate = '';
  if (match) {
    const [month, day, year] = match.slice(1);
    formattedDate = [
      // We treat all non-numeric characters as a delimiter. If they're using a
      // delimiter after a month or day, we interpret that as the user supplying
      // a single digit for month or day, which we will automatically pad for them.
      month && month.padStart(2, '0'),
      day && day.padStart(2, '0'),
      year,
    ]
      .filter((s) => s)
      .join('/');
  }
  if (valueOnly) {
    return formattedDate;
  }
  const hint = 'MM/DD/YYYY';
  const hintSub = hint.substring(formattedDate.length);
  return formattedDate + hintSub;
}

export function useLabelMask(maskFn: MaskFunction, inputEl: React.ReactElement) {
  const [focused, setFocused] = useState(false);
  const { onFocus, onBlur, onChange, value } = inputEl.props;

  const modifiedInputEl = React.cloneElement(inputEl, {
    defaultValue: undefined,
    onFocus: (e) => {
      if (onFocus) {
        onFocus(e);
      }

      setFocused(true);
    },
    onBlur: (e) => {
      const maskedValue = maskFn(value, true);
      e.currentTarget.value = maskedValue;
      e.target.value = maskedValue;

      if (onChange) {
        onChange(e);
      }
      
      if (onBlur) {
        return onBlur(e);
      }

      setFocused(false);
    },
    type: 'text',
    inputMode: 'numeric',
  });

  return {
    labelMask: (
      <div className="ds-c-label-mask" aria-hidden="true">
        {maskFn(focused ? value : '')}
      </div>
    ),
    input: modifiedInputEl,
  };
};

export default useLabelMask;
