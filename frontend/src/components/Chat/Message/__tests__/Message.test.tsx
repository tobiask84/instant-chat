import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Message } from '../index';
import * as useUser from '../../../../hooks/useUser';
import * as useSettings from '../../../../hooks/useSettings';
import { defaultSettings } from '../../../../pages/Settings/constants';
import { ClockFormat } from '../../../../pages/Settings/Settings.types';
import { messageFixture } from './__fixtures__/MessageFixture';

describe('Message', () => {
  test('renders text', () => {
    const { getByText } = render(<Message message={messageFixture} />);
    expect(getByText(messageFixture.text)).toBeDefined();
  });

  test("doesn't render user name for own messages", () => {
    jest
      .spyOn(useUser, 'default')
      .mockImplementationOnce(() => [{ id: 'userId', name: 'User' }, () => {}]);
    const { container } = render(<Message message={messageFixture} />);

    expect(container.innerHTML.includes(messageFixture.userName)).toBeFalsy();
  });

  test('renders user name for other messages', () => {
    jest
      .spyOn(useUser, 'default')
      .mockImplementationOnce(() => [
        { id: 'otherId', name: 'User' },
        () => {},
      ]);
    const { container } = render(<Message message={messageFixture} />);

    expect(container.innerHTML.includes(messageFixture.userName)).toBeTruthy();
  });

  test('renders time with correct format', () => {
    const settingsFn = jest.spyOn(useSettings, 'default');

    settingsFn.mockImplementationOnce(() => [
      { ...defaultSettings, clockFormat: ClockFormat.am },
      () => {},
    ]);
    const elem1 = render(<Message message={messageFixture} />);
    expect(elem1.getByText('3:30 PM')).toBeDefined();

    settingsFn.mockImplementationOnce(() => [
      { ...defaultSettings, clockFormat: ClockFormat.full },
      () => {},
    ]);
    const elem2 = render(<Message message={messageFixture} />);
    expect(elem2.getByText('15:30')).toBeDefined();
  });
});
