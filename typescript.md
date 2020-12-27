# typescript

> 기억할 만한 타입스크립트 문법

## symbol

## generator

```ts
function* generator() {
  try {
    yield 'foo';
  } catch (err) {
    console.log(err.message); // bar!
  }
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution throwing an exception 'bar'
var nextThing = iterator.throw(new Error('bar'));
```

## `!!`

> boolean으로 type 변환

```ts
let a = false;
let b = new Boolean(false);
console.log(!!a, typeof a); // false,  "boolean"
console.log(!!b, typeof b); // true,  "object"

console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
```

## `==` vs `===`

- `==`: implicitly 형변환 후 비교
- `===`: 형변환 없이 비교

```ts
console.log(1 == true); // true
console.log(1 === true); // false
```

## `Class`

> [class](https://www.youtube.com/watch?v=zr4oTaZos9U&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=25)

- 중복이 많은 class 코드
  - 개인적으로 2번째 코드가 더 깔끔해 보임

```ts
class HumanOld {
  name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }
}
```

- constructor로 모두 처리하는 코드 코드

```ts
class Human {
  constructor(name: string, private _age: number) {}

  get age() {
    return this._age;
  }
}

let minwook = new Human('minwook', 29);
console.log(minwook.age);
```

## static

```ts
class CalcConstants {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    // this is ref for class
    return diameter * this.PI;
  }
  calcCircumference2(diameter: number): number {
    return diameter * CalcConstants.PI;
  }
}

console.log(CalcConstants.PI);
console.log(CalcConstants.calcCircumference(10));

let myCalc = new CalcConstants();
console.log(myCalc.calcCircumference2(10));
```

## Inheritance

- super points to public / protected method
  - not allowed private
  - method가 아닌 경우는?(즉 후손이 오버라이딩 하는 것이 메서드가 아닌 함수를 담은 변수라면?) 후손에서 접근할때 this 사용

```ts
// method 가 아닌 경우
class Base {
  name: string = '홍길동';
  public action = function () {
    console.log('Hello World!');
  };
}

class Member extends Base {
  memberAction() {
    this.action();
    console.log(`Hello ${this.name}`);
  }
}

let a = new Member();
a.memberAction();
```

```
private: class 안에서만
protected: 후손까지만, 즉 extends 까지만 (외부에서 접근 불가)
```
