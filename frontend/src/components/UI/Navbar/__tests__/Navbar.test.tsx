import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import NavBar from '../index';
import { Tab, TabId } from '../../../../containers/Generic.types';

describe('NavBar', () => {
  let tabs: Tab[];
  beforeAll(() => {
    tabs = [
      { id: TabId.chat, label: 'Chat' },
      { id: TabId.settings, label: 'Settings' },
    ];
  });

  test('renders tabs', () => {
    const { getByText } = render(
      <NavBar tabs={tabs} activeTabId={TabId.chat} onChange={() => {}} />,
    );
    expect(getByText('Chat')).toBeDefined();
    expect(getByText('Settings')).toBeDefined();
  });
});
