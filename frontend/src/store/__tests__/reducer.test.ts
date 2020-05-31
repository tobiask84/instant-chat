import { initialState, reducer } from '../reducer';
import { messageFixture } from '../../components/Chat/Message/__tests__/__fixtures__/MessageFixture';
import { MessageAction } from '../reducer.types';
import { tabs } from '../../components/UI/Navbar';

const messageAction: MessageAction = {
  type: 'receive-message',
  message: messageFixture,
};

describe('Reducer', () => {
  test('initially the message Array is empty', () => {
    expect(initialState.messages.length).toBe(0);
  });

  test('received messages are added to the message array', () => {
    const newState = reducer(initialState, messageAction);
    expect(newState.messages.length).toBe(1);
    expect(JSON.stringify(newState.messages[0])).toBe(
      JSON.stringify(messageFixture),
    );
  });

  test('expect unread Message Count to stay the same if messages are received in chat tab', () => {
    // chat tab is active
    expect(tabs[0].label).toBe('Chat');
    expect(initialState.activeTab).toBe(tabs[0].id);

    expect(initialState.unreadMessageCount).toBe(0);
    const newState = reducer(initialState, messageAction);
    expect(newState.unreadMessageCount).toBe(0);
  });

  test('expect unread Message Count to increase if messages are received in settings tab', () => {
    // chat tab is active
    expect(tabs[1].label).toBe('Settings');
    const settingsActive = { ...initialState, activeTab: tabs[1].id };

    expect(settingsActive.unreadMessageCount).toBe(0);
    const newState = reducer(settingsActive, messageAction);
    expect(newState.unreadMessageCount).toBe(1);
  });

  test('expect unread Messages to be set to 0 when opening the chat tab', () => {
    // chat tab is active
    expect(tabs[1].label).toBe('Settings');
    const settingsActive = {
      ...initialState,
      activeTab: tabs[1].id,
      unreadMessageCount: 1,
    };

    expect(settingsActive.unreadMessageCount).toBe(1);
    const newState = reducer(settingsActive, {
      type: 'set-tab',
      tab: tabs[0].id,
    });
    expect(newState.unreadMessageCount).toBe(0);
  });
});
