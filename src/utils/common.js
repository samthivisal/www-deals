/**
 * Randomize date for tests
 * @param start
 * @param end
 * @return {Date}
 */
export const randomDate = (start, end)  => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};