export function add(a: number, b: number): number {
  return a + b;
}

export function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}
