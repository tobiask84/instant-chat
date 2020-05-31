export const badgeCountToString = (count: number): string => {
  if (count > 9) {
    return '9+';
  }
  if (count === 0) {
    return '';
  }
  return count.toString();
};
