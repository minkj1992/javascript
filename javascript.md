# es6

## arrow function

```js
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// 이 문장은 배열을 반환함: [8, 6, 7, 9]
elements.map(function (element) {
  return element.length;
});

// 위의 일반적인 함수 표현은 아래 화살표 함수로 쓸 수 있다.
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 파라미터가 하나만 있을 때는 주변 괄호를 생략할 수 있다.
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 화살표 함수의 유일한 문장이 'return'일 때 'return'과
// 중괄호({})를 생략할 수 있다.
elements.map((element) => element.length); // [8, 6, 7, 9]

// 이 경우 length 속성만 필요하므로 destructuring 매개변수를 사용할 수 있다.
// 'length'는 우리가 얻고자 하는 속성에 해당하는 반면,
// lengthFooBArX'는 변경 가능한 변수의 이름일 뿐이므로
// 원하는 유효한 변수명으로 변경할 수 있다.
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// destructuring 파라미터 할당도 아래와 같이 작성할 수 있습니다.
// 이 예에서 정의한 객체내의 'length'에 값을 지정하지 않은 점에 주목하세요. 대신, "length" 변수의
// 리터럴 이름은 우리가 해당 객체에서 꺼내오고 싶은 속성이름 자체로 사용됩니다.
elements.map(({ length }) => length); // [8, 6, 7, 9]
```

## .call()

> this의 dependency injection

```js
let person1 = {
  firstName: "Team",
  lastName: "Jupeter",
  fullName: function () {
    // method
    return this.firstName + " " + this.lastName;
  },
};

let person2 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person1.fullName()); // person1(S) + fullName(V)
console.log(person2.fullName()); // person2(S) + fullName(V)    Err
console.log(person1.fullName.call(person2)); // Will return "John Doe"
```

## object literal 방식

```js
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }; // object literal
```

## object constructor 방식

```js
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

## mutable, immutable

- JS is a mutable language.
- but There are many immutable JS variants.

## expression and statement

- `expression`(표현식) returns a value
  - **JS engine reads a sentence or a word, and returns a value**
- `statement` (선언문)
  - return 보장하지 않음
  - if, for, while ...

## 신기했던 expression `a,b`

- 둘중의 뒤에 값을 return

```js
let a = (3, 5);
console.log(a); // 5

let a = (3, 4 == 5);
console.log(a); // false

function dummy() {
  return "I'm a dummy";
}

let a = (3, dummy());
console.log(a); // I'm a dummy
```

- ||를 활용한 if 구문

```js
function objectFactory() {
  return { a: 1, b: 2 };
}

function zeroFactory() {
  return null;
}

function sayObj() {
  console.log("I'm object!");
}

let maybeObject = zeroFactory();

let objOrNull = maybeObject || (sayObj(), objectFactory());
console.log(objOrNull); // I'm object! ›{a: 1, b: 2}
```

if 문 처리를 한 뒤, side-effect로 기능을 추가해주고 return 값을 , 뒤에 제공가능
