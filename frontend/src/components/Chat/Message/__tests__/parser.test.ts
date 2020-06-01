import { expect } from '@jest/globals';
import { extractYoutubeId, getYoutubeUrls } from '../parser';

describe('Youtube id Parser', () => {
  test('extracts youtube video ids', () => {
    expect(
      extractYoutubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    ).toBe('dQw4w9WgXcQ');
    expect(extractYoutubeId('/watch?v=dQw4w9WgXc')).toBe(false);
  });

  test('finds youtube urls', () => {
    expect(
      getYoutubeUrls(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ asdlkfj asldfjk asdf www.youtube.com/watch?v=dQw4w9WgXcQ aldwkfj alsdfjkhttps://www.youtube.com/watch?v=dQw4w9WgXcQ',
      ),
    ).toEqual([
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ]);
  });
});
