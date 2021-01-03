# typescript

> 타입스크립트는 Compile time에 타입을 검사하는 layer를 지닌 JS 런타임 입니다.

- JS와 동일한 런타임에서 동작합니다.
- TS를 컴파일 하면 JS코드가 생성됩니다.
- TS는 JS에 단순히 Type-layer를 추가한 것으로, 컴파일 된 JS코드에서는 `erased type`으로 제공됩니다.

by [TS for the new programmer](https://typescript-kr.github.io/pages/tutorials/ts-for-the-new-programmer.html)

## Duck typing

> == 구조적 타입 시스템 (Structural Type System)

- Java는 클래스, 또는 인터페이스를 통해 선언적으로 형을 표기할 수 있습니다. 그러나, JavaScript를 비롯한 동적 언어는 덕 타이핑(Duck Typing)이란 방법을 사용합니다. 덕 타이핑은 인자가 어떤 형인지 상관 없이 그 동작(Behavior)을 할 수 있는지를 확인하여 객체를 판단하는 방법입니다.

> 덕 타이핑(duck typing)은 동적 타이핑의 한 종류로, 객체의 변수 및 메소드의 집합이 객체의 타입을 결정하는 것을 말한다. 클래스 상속이나 인터페이스 구현으로 타입을 구분하는 대신, 덕 타이핑은 객체가 어떤 타입에 걸맞은 변수와 메소드를 지니면 객체를 해당 타입에 속하는 것으로 간주한다.

> Duck Typing을 이용하기 위해서는 타입 체크가 연기되어 프로그램이 실행될 때(Runtime에) 이루어져야 하며, 이는 동적 타이핑 혹은 리플렉션(Reflection)을 이용해 구현된다.

> Duck Typing은 한 객체(Object)가 특정한 목적에 적합한지 판별하는 데 관한 것이다. 일반적인 타이핑의 경우, 객체의 적합성은 오로지 객체의 타입의 따라 정해진다. Duck Typing에서는 실제 객체의 타입보다는, 객체의 (알맞은 의미를 가진) 메서드와 속성들의 존재 여부로 적합성을 판단한다.

## 타입 추론 (Types by Inference)

- 타입스크립트는 Duck typing이다.

> One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”

> TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.

- 즉 두 object의 properties가 다른 상황에서 assign이 일어난다면 compile-time error가 발생한다.
- 두 오브젝트의 Property가 동일, 또는 포함관계를 가지면 같은(포함된 타입)으로 간주할 수 있다.

## 정적 클래스 (Static Classes)

> Singleton classes in TypeScript are generally an anti-pattern. You can simply use namespaces instead.

추가적으로, C#과 Java의 싱글턴과 정적 클래스 같은 특정 구조는 TypeScript에서 필요하지 않습니다.

## 타입 요약

TypeScript에는 기본 내장된 타입에 해당하는 원시 타입이 있습니다:

- `number`
- `string`
- `boolean`
- `symbol`
- `null`
- `undefined`
- `object`

## 다른 중요한 TypeScript 타입 (Other important TypeScript types)

| 타입          | 설명                                                        |
| ------------- | ----------------------------------------------------------- |
| `unknown`     | 최상위 타입.                                                |
| `never`       | 하위 타입.                                                  |
| 객체 리터럴   | 예, `{ property: Type }`                                    |
| `void`        | 리턴 타입으로 사용하기 위해 의도된 `undefined` 의 서브타입. |
| `T[]`         | 수정가능한 배열들, 또한 `Array<T>` 으로 사용가능            |
| `[T, T]`      | 고정된 길이지만 수정 가능한 튜플                            |
| `(t: T) => U` | 함수                                                        |
