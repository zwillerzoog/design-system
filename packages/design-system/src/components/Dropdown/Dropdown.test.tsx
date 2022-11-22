import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

const defaultProps = { name: 'dropdown', label: 'Select an option' };

export function generateOptions(count: number): { value: string; label: string }[] {
  const options = [];

  for (let i = 1; i < count + 1; i++) {
    options.push({
      value: String(i),
      label: String(i),
    });
  }

  return options;
}

function makeDropdown(customProps = {}, optionsCount = 1) {
  const props = { ...defaultProps, ...customProps };
  const component = <Dropdown {...props} options={generateOptions(optionsCount)} />;

  return render(component);
}

describe('Dropdown', () => {
  it('dropdown matches snapshot', () => {
    const { container } = makeDropdown({
      value: '1',
      label: '',
      ariaLabel: 'test aria label',
      readOnly: true,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
