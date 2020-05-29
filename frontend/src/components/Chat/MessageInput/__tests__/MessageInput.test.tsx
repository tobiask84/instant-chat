import React from 'react';
import { expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import MessageInput from '../index';

describe('MessageInput', () => {
  const onSendMock = jest.fn();

  test("can't send an empty message", async () => {
    render(<MessageInput onSend={onSendMock} />);
    const elem = await screen.findByTestId('message-input');

    expect(elem.querySelector('button').disabled).toBe(true);

    const input = elem.querySelector('input');
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    expect(onSendMock).not.toHaveBeenCalled();
  });

  test('can send a message on button click', async () => {
    render(<MessageInput onSend={onSendMock} />);
    const elem = await screen.findByTestId('message-input');

    fireEvent.change(elem.querySelector('input'), {
      target: { value: 'message' },
    });
    fireEvent.click(elem.querySelector('button'));

    expect(onSendMock).toHaveBeenCalledWith('message');
  });

  test('can send a message on Enter press', async () => {
    render(<MessageInput onSend={onSendMock} />);
    const elem = await screen.findByTestId('message-input');
    const input = elem.querySelector('input');

    fireEvent.change(input, {
      target: { value: 'message' },
    });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    expect(onSendMock).toHaveBeenCalledWith('message');
  });
});
