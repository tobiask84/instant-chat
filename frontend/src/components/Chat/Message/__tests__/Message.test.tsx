import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { MessageType } from '../../../../containers/Chat/Chat.types';
import Message from '../index';

describe('Message', () => {
  let message: MessageType;
  beforeAll(() => {
    message = {
      id: 1,
      timestamp: Date.now(),
      user: 'User',
      text: 'Test message',
    };
  });

  test('renders message', () => {
    const { getByText } = render(<Message message={message} />);
    expect(getByText(message.text)).toBeDefined();
  });
});
