import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { MessageType } from '../../../../containers/Chat/Chat.types';
import Message from '../index';
import * as useUser from '../../../../hooks/useUser';
import * as useSettings from '../../../../hooks/useSettings';
import { defaultSettings } from '../../../../containers/Settings/constants';
import { ClockFormat } from '../../../../containers/Settings/Settings.types';

describe('Message', () => {
  let message: MessageType;
  beforeAll(() => {
    message = {
      id: 1,
      userId: 'userId',
      timestamp: new Date('2020-05-25 15:30').getTime(),
      userName: 'User',
      text: 'Test message',
    };
  });

  test('renders text', () => {
    const { getByText } = render(<Message message={message} />);
    expect(getByText(message.text)).toBeDefined();
  });

  test("doesn't render user name for own messages", () => {
    jest
      .spyOn(useUser, 'default')
      .mockImplementationOnce(() => [{ id: 'userId', name: 'User' }, () => {}]);
    const { container } = render(<Message message={message} />);

    expect(container.innerHTML.includes(message.userName)).toBeFalsy();
  });

  test('renders user name for other messages', () => {
    jest
      .spyOn(useUser, 'default')
      .mockImplementationOnce(() => [
        { id: 'otherId', name: 'User' },
        () => {},
      ]);
    const { container } = render(<Message message={message} />);

    expect(container.innerHTML.includes(message.userName)).toBeTruthy();
  });

  test('renders time with correct format', () => {
    const settingsFn = jest.spyOn(useSettings, 'default');

    settingsFn.mockImplementationOnce(() => [
      { ...defaultSettings, clockFormat: ClockFormat.am },
      () => {},
    ]);
    const elem1 = render(<Message message={message} />);
    expect(elem1.getByText('3:30 PM')).toBeDefined();

    settingsFn.mockImplementationOnce(() => [
      { ...defaultSettings, clockFormat: ClockFormat.full },
      () => {},
    ]);
    const elem2 = render(<Message message={message} />);
    expect(elem2.getByText('15:30')).toBeDefined();
  });
});
