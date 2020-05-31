import { expect } from '@jest/globals';
import { badgeCountToString } from '../UnreadMessages';

describe('UnreadMessages', () => {
  test('return the count as string', () => {
    expect(badgeCountToString(1)).toBe('1');
    expect(badgeCountToString(9)).toBe('9');
  });
  test('return an empty string if the count is zero ', () => {
    expect(badgeCountToString(0)).toBe('');
  });
  test('do not return more than 2 digits', () => {
    expect(badgeCountToString(10)).toBe('9+');
    expect(badgeCountToString(99)).toBe('9+');
    expect(badgeCountToString(100)).toBe('9+');
  });
});
