import React from 'react';
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MessageType } from '../../../../pages/Chat';
import MessageList from '..';

describe('MessageList', () => {
  let messages: MessageType[];
  beforeAll(() => {
    messages = new Array(5).fill(1).map((el, i) => ({
      id: i,
      userId: 'userId',
      timestamp: new Date('2020-05-25 15:30').getTime(),
      userName: 'User',
      text: 'Test message',
    }));
  });

  test('renders messages', async () => {
    render(<MessageList messages={messages} />);
    const elem = await screen.findByTestId('message-list');
    expect(elem.children.length).toBe(messages.length);
  });

  test('renders nothing when no messages are provided', async () => {
    render(<MessageList messages={[]} />);
    const elem = await screen.findByTestId('message-list');
    expect(elem.children.length).toBe(0);
  });
});
