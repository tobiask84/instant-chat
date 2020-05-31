import { MessageType } from '../../../../../pages/Chat';

const messageFixture: MessageType = {
  id: 1,
  userId: 'userId',
  timestamp: new Date('2020-05-25 15:30').getTime(),
  userName: 'User',
  text: 'Test message',
};

export { messageFixture };
