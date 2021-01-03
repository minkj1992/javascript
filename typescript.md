# typescript

> 기억할 만한 타입스크립트 문법

## symbol

## generator

```ts
function* generator() {
  try {
    yield "foo";
  } catch (err) {
    console.log(err.message); // bar!
  }
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution throwing an exception 'bar'
var nextThing = iterator.throw(new Error("bar"));
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

let minwook = new Human("minwook", 29);
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
  name: string = "홍길동";
  public action = function () {
    console.log("Hello World!");
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

## basic interface

```ts
// interface
interface User {
  readonly id: number;
  name: string;
  address: string;
  nickname?: string;
  [propName: string]: any; // 특별한 경우 추가 프로퍼티가 필요할 경우
}
```

## interface with function type

```ts
// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 함수 매개변수들은 같은 위치에 대응되는 매개변수끼리 한번에 하나씩 검사합니다
// 타입 지정하지 않고 사용 가능
let mySearch: SearchFunc;
mySearch = (src, sub): boolean => src.search(sub) > -1;
// let mySearch : SearchFunc = (src,sub):boolean =>  src.search(sub) > -1;

let searchVal: boolean = mySearch("제갈공명은 엄청난 책사다", "제갈공명");
```

## interface Inheritance

- 선언 만 하고 싶을 때(생성과 초기화를 분리)

```ts
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = { color: "RED", sideLength: 1 };
```

- 참고로 ts interface multi Inheritance 가능

## Interface with Indexable Types (Index Signature)

> `[]`로 생성된 object에 접근하기 위한 방법

- 지원되는 index signature의 타입은 `number`, `string`이 있습니다.

- number 형

```ts
interface NumberIdxArr {
  [index: number]: string;
}

let myArray: NumberIdxArr;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0]; // "Bob"
```

- string 형

```ts
interface StringIdxObj {
  [index: string]: string;
}

let myArray2: StringIdxObj;
myArray2 = { a: "Bob", b: "Fred" };

let myStr2: string = myArray2["a"]; // "Bob"
```

- dict 형식에서 활용
  - number을 사용할 경우 return type이 string, number 상관없이 모두 사용가능 하지만, string형을 sig로 사용할 경우에는 오류가 발생합니다.

```ts
interface NumberDictionary {
  [index: number]: number;
  age: number; // 성공
  name: string; // 성공
  // 컴파일 성공은 가능하지만, 실제로 number idx로 접근하면 undefined
}

interface WrongStringDictionary {
  [index: string]: number;
  age: number; // 성공
  name: string; // Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface CorrectStringDictionary {
  [index: string]: number | string;
  age: number; // 성공
  name: string; // 성공
}
```

- readonly index Signature

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // 오류
```

## interface vs type

- Interface의 Declaration Merging이 가장 큰 차이이다

  - interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에서 합쳐지기 때문에 확장성이 좋다. 따라서 일반적으로는 interface를 사용하고 union, tuple 등이 필요한 경우에만 type 별칭을 사용하라는 TypeScript Handbook의 내용은 현재에도 유효하다.
  - declaration merging으로 확장할 수 있기 때문에, 외부에 노출해야 하는 public API에 사용되는 타입은 항상 interface를 사용하여 작성해야 한다.
  - type 별칭으로 작성된 타입은 조금 더 제한적이기 때문에 private API같이 외부에 노출할 필요가 없는 경우에 사용하는 것이 좋다.

- React Component의 Props와 State의 타입을 기술하려면 어떤 것이 좋을까?

  - interface와 type alias에 대해 알아보기 시작한 이유이다.

  - 일반적으로는 interface를 사용해도 무리가 없다.
  - React component를 사용하는데 declaration merging이나 implements는 필요 없다.
  - interface는 union이 사용되었다면 extends 할 수 없기 때문에 해당 경우에는 type 별칭을 사용해서 타입을 기술해야 한다.

## Generic

- generic 또한 variable이다
- generic은 값으로 type을 가진다.

- basic form

```ts
function identity<T>(arg: T): T {
  return arg;
}

let i = identity<number>(1000);
```

## Array의 generic

- 문제상황

```ts
function getLength<T>(arg: T): T {
  // error
  return arg.length;
}
```

- solution

```ts
// T[] == Array<T>
function getLength<T>(arg: Array<T>): T[] {
  return arg.length;
}

function getLength<T>(arg: T[]): T[] {
  return arg.length;
}

getLength<number>([23]);
getLength<string>(["minwook"]);
```

## Generic Function type

- 함수의 제너릭 타입을 선언해주는 방법

```ts
function identity<T>(arg: T): T {
  return arg;
}

// <T>(arg: T) => T == {<T>(arg: T) : T}
// 후자는 object으로 타입 명시
let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity("minwook"));

let myIdentity: { <T>(arg: T): T } = identity;
console.log(myIdentity("minwook"));
```

## Generic class

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
```

## Links

- [typescript 핸드북](https://typescript-kr.github.io/pages/interfaces.html)
- [TypeScript에서 Type을 기술하는 두 가지 방법, Interface와 Type Alias](https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/)
