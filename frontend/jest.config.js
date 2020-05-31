module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['index.tsx', '/__fixtures__/'],
};
