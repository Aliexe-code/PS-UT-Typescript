export function romanToInt(s: string): number {
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];
    if (next && next > current) {
      count -= current;
    } else {
      count += current;
    }
  }
  return count;
}
