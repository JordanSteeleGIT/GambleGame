export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export const scoreValuesStored = [
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

export const scoreWorth = [
  20000,
  14000,
  12000,
  9000,
  5000,
  4500,
  3000,
  2000,
  1000,
  500,
  1,
  0,
  -500,
  -2000,
  -6000,
  -8000,
  -10000,
  -12000,
  -15000,
];
