## range 함수

```ts
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

let numbers: number[] = range(1, 100 + 1);
```

## fold

> T[] -> T

명령형 방식은 시스템 자원의 효율을 최우선으로 생각하지만, 선언형 방식은 `fold`처럼 범용으로 구현된 함수를 재사용 하며 문제를 해결하려 합니다.

```ts
export const fold = <T>(arr: T[], cb: (result: T, val: T) => T, initVal: T) => {
  let result: T = initVal;
  for (let i = 0; i < arr.length; ++i) {
    const val = array[i];
    result = cb(result, val);
  }
  return result;
};

let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, val) => result + val, 0);
```

## map

> x:T ~> y: Q

```ts

```
