// eslint-disable-next-line import/prefer-default-export
export const sum = (...a: number[]): number => {
  return a.reduce((acc, val) => acc + val, 0);
};
