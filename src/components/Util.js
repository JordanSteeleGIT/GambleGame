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

export const scoreValues = shuffle([
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
]);

export const scoreWorth = [
  20000,
  17000,
  15000,
  12000,
  10000,
  9000,
  6000,
  4000,
  2000,
  1000,
  500,
  1,
  0,
  -500,
  -2000,
  -4000,
  -5000,
  -7000,
  -10000,
];
