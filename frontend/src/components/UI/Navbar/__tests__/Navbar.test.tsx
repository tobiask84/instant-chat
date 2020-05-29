import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import NavBar from '../index';
import { Tab, TabId } from '../../../../containers/Generic.types';
import { fireEvent } from '@testing-library/dom';

describe('NavBar', () => {
  const tabs: Tab[] = [
    { id: TabId.chat, label: 'Chat' },
    { id: TabId.settings, label: 'Settings' },
  ];
  const onChange = jest.fn();

  test('renders tabs', () => {
    const { getByText } = render(
      <NavBar tabs={tabs} activeTabId={TabId.chat} onChange={onChange} />,
    );
    expect(getByText('Chat')).toBeDefined();
    expect(getByText('Settings')).toBeDefined();
  });

  test('selects a tab on click', () => {
    const { getByText } = render(
      <NavBar tabs={tabs} activeTabId={TabId.chat} onChange={onChange} />,
    );

    fireEvent.click(getByText('Settings'));
    expect(onChange).toHaveBeenCalled();
  });
});
