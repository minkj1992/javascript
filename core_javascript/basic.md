# 자바스크립트란?
> ECMAScript라는 고유한 명세를 갖춘 독립적인 언어

자바스크립트 엔진(JavaScript engine)이라 불리는 특별한 프로그램이 들어 있는 모든 디바이스에서도 동작합니다.

브라우저엔 '자바스크립트 가상 머신’이라 불리는 엔진이 내장되어 있습니다.

# Debug
## Multi-line input
보통은 한줄 짜리 명령어를 입력하고 Enter를 눌러 해당 명령어를 실행하는 작업을 많이 합니다.

명령어를 여러 줄에 걸쳐 작성하고 싶다면 Shift+Enter를 누르면 됩니다. Shift+Enter를 누르면 명령어를 실행시키지 않고 줄 바꿈만 할 수 있기 때문에 자바스크립트 코드 조각을 입력하는 것도 가능해집니다.

# 빠르게 배우는 js

## 파일로 분리
HTML 안에 직접 스크립트를 작성하는 방식은 대개 스크립트가 아주 간단할 때만 사용합니다. 스크립트가 길어지면 별개의 분리된 파일로 만들어 저장하는 것이 좋습니다.

스크립트를 별도의 파일에 작성하면 브라우저가 스크립트를 다운받아 캐시(cache)에 저장하기 때문에, 성능상의 이점이 있습니다.

여러 페이지에서 동일한 스크립트를 사용하는 경우, 브라우저는 페이지가 바뀔 때마다 스크립트를 새로 다운받지 않고 캐시로부터 스크립트를 가져와 사용합니다. 스크립트 파일을 한 번만 다운받으면 되죠.

이를 통해 트래픽이 절약되고 웹 페이지의 실제 속도가 빨라집니다.


## `src` 속성이 있으면 태그 내부의 코드는 무시됩니다.
```js
<script src="file.js">
  alert(1); // src 속성이 사용되었으므로 이 코드는 무시됩니다.
</script>
```

## 세미콜론

```js
alert("에러가 발생합니다.")
[1, 2].forEach(alert)
```

세미콜론이 없을 때 에러가 발생했던 이유는 자바스크립트가 대괄호 [...]앞에는 세미콜론이 있다고 가정하지 않기 때문입니다.

## strict mode
> 스크립트 전체가 “모던한” 방식으로 동작

- 코드를 클래스와 모듈을 사용해 구성한다면 "use strict"를 생략해도 됩니다.
- "use strict"는 반드시 최상단에 위치시키세요.
```js
alert("some code");
// 하단에 위치한 "use strict"는 스크립트 상단에 위치하지 않으므로 무시됩니다.

"use strict";

// 엄격 모드가 활성화되지 않습니다.
```

## 변수

- 변수를 두 번 선언하면 에러가 발생합니다. 변수는 한 번만 선언해야 합니다.

```js
let message = "This";

// 'let'을 반복하면 에러가 발생합니다.
let message = "That"; // SyntaxError: 'message' has already been declared
```

- 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.

```js
let $ = 1; // '$'라는 이름의 변수를 선언합니다.
let _ = 2; // '_'라는 이름의 변수를 선언합니다.

alert($ + _); // 3
```

- `var`, `const`, `let`없이 변수 할당

```js
"use strict";

num = 5; // error: num is not defined
```

- 변수를 추가하는 것은 악습이 아닙니다. 좋은 습관입니다.
  - 모던 자바스크립트 압축기(minifier)와 브라우저는 코드 최적화를 잘해줍니다. 변수를 추가한다고 해서 성능 이슈가 생기지 않죠. 값이 다른 경우, 변수를 다르게 선언해 주면 코드 최적화에 도움이 될 수도 있습니다.

## Numeric(숫자형)


수학 연산은 안전합니다.
자바스크립트에서 행해지는 수학 연산은 '안전’하다고 볼 수 있습니다. 0으로 나눈다거나 숫자가 아닌 문자열을 숫자로 취급하는 등의 이례적인 연산이 자바스크립트에선 가능합니다.

말이 안 되는 수학 연산을 하더라도 스크립트는 치명적인 에러를 내뿜으며 죽지 않습니다. NaN을 반환하며 연산이 종료될 뿐입니다.

## String(문자형)

- 큰따옴표: "Hello"
- 작은따옴표: 'Hello'
- 역 따옴표(백틱, backtick): `Hello`: 연산 제공

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3
```

큰따옴표나 작은따옴표를 사용하면 중간에 표현식을 넣을 수 없다는 점에 주의하시기 바랍니다. 이 방법은 역 따옴표를 써야만 가능합니다.

- java, c와 달리 `char`형은 따로 존재하지 않는다.

## null
> ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’

null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듭니다.

자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.

하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.

## undefined
> undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.

- undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.

- 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.

```js
let age = 100;

// 값을 undefined로 바꿉니다.
age = undefined;

alert(age); // "undefined"
```

하지만 이렇게 undefined를 직접 할당하는 걸 권장하진 않습니다. 변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용하세요. undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남겨둡시다.

## object & symbol

- 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다. 심볼형에 대해선 객체를 학습하고 난 이후에 자세히 알아보겠습니다.


## typeof

- 연산자: typeof x
- 함수: typeof(x)

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

## modal

메시지가 있는 작은 창은 모달 창(modal window) 이라고 부릅니다. '모달’이란 단어엔 페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포되어 있습니다. 따라서 사용자는 모달 창 바깥에 있는 버튼을 누른다든가 하는 행동을 할 수 없습니다. 확인 버튼을 누르기 전까지 말이죠.

## prompt

브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받습니다.

```js
// title: 사용자에게 보여줄 문자열
// default: 입력 필드의 초깃값(선택값)

result = prompt(title, [default]);
```

텍스트 메시지와 입력 필드(input field), 확인(OK) 및 취소(Cancel) 버튼이 있는 모달 창을 띄워줍니다.

- 인수를 감싸는 대괄호 [...]의 의미
  - default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미합니다.

- 단 Internet Explorer(IE)에서는 항상 '기본값’을 넣어주어야 한다.
  - 이 때문에 IE 사용자를 비롯한 모든 사용자에게 깔끔한 프롬프트를 보여주려면 아래와 같이 두 번째 매개변수를 항상 전달해 줄 것을 권장합니다.

```js
let test = prompt("Test", ''); // <-- IE 사용자를 위한 매개변수 처리
```

## confirm
> 질문 & bool 대답

```js
let isBoss = confirm("당신이 주인인가요?");

alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.
```

## alert & prompt & confirm

지금까지 살펴본 세 함수엔 두 가지 제약사항이 있습니다.

1. 모달 창의 위치는 브라우저가 결정하는데, 대개 브라우저 중앙에 위치합니다.
2. 모달 창의 모양은 브라우저마다 다릅니다. 개발자는 창의 모양을 수정할 수 없습니다.

이런 제약사항은 간결성을 위해 치러야 할 대가입니다. 창을 더 멋지게 꾸미고 복잡한 상호작용을 가능하게 해주는 다른 방법도 있긴 하지만, '멋을 위한 부가 기능’이 필요하지 않다면 지금까지 소개해드린 기본 메서드만으로 충분합니다.


## Type Conversion( 형변환 )

### String
- `alert(value)`에서 value는 문자형이어야 합니다. 만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환됩니다.
- `String(value)` 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.

```js
alert( '1' + 2 ); // "12"
alert( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.
```

연산은 왼쪽에서 오른쪽으로 순차적으로 진행되기 때문에 이런 결과가 나왔습니다.

```js
// 숫자형이 아닌 피연산자는 숫자형으로 변환 합니다.
alert( +true ); // 1
alert( +"" );   // 0
```

### Numeric

```js
alert( "6" / "2" ); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행됩니다.
```

Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.

숫자형 값를 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼(form)을 통해 입력받는 경우엔, 이런 명시적 형 변환이 필수입니다.

한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 됩니다. 예시를 살펴봅시다.

```js
let str ='123';
alert(typeof str); // string

let age = Number("잘못된 형변환");
alert(age) // NaN
```


| 전달받은 값 |	형 변환 후 |
|---|:---:
undefined |	NaN
null |	0
true and false |	1 과 0
string |	문자열의 처음과 끝 공백이 제거됩니다. 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패하면 NaN이 됩니다.

<br/><br/>

- 형 변환 규칙

```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

### Boolean

- `false`: 0, '', "", ``, null, undefined, NaN ...

- `true` 주의할 사항:  "0", " ", ' ' is true 


## 연산자

### 실수 하기 쉬운 사항

```js
let n = 2;
n *= 3 + 5;

alert( n ); // 16  (*=의 우측이 먼저 평가되므로, 위 식은 n *= 8과 동일합니다.)

```

### `=`

```js
let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

참고로 pyhton의 `=`는 return None

```python
>>> a = 1
>>> b= 2
>>> c = 3- (a = b + 1)
  File "<stdin>", line 1
    c = 3- (a = b + 1)
              ^
SyntaxError: invalid syntax
```

### `++` / `--`
> 두 형의 차이는 ++/--의 반환 값을 사용할 때 드러 남 

- counter++와 같이 피연산자 뒤에 올 때는, **'후위형(postfix form)**'이라고 부릅니다. **이는 return 후, 값을 변경합니다.**
- ++counter와 같이 피연산자 앞에 올 때는, **'전위형(prefix form)**'이라고 부릅니다. **값 변경 후 return 합니다.**

- 반환 값을 사용하지 않는 경우라면, 전위형과 후위형엔 차이가 없습니다.

### `,` (쉼표 연산자)
> 쉼표 연산자 ,는 여러 표현식을 코드 한 줄에서 평가할 수 있게 해줍니다. 이때 표현식 각각이 모두 평가되지만, 마지막 표현식의 평가 결과만 반환되는 점에 유의해야 합니다.

```js
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4의 결과)
```

- 사용 예시
```js
// 한 줄에서 세 개의 연산이 수행됨
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```