Javascript Basic
==================
# 목차















=================

## `;`와 줄바꿈
자바스크립트에서는 ;를 문장의 끝으로 생각한다. 

`;`은 scope에 영향을 준다. 줄바꿈 또한 `;`로 처리된다.


## 비교 연산자

+ `==` 는 값 비교
+ `===` 는 정확한 비교 (내 생각에는 object 비교인듯?)
+ `!=` 는 `==`와 대응
+ `!==` 는 `===`와 대응


``` javascript
console.log(1!='1')
VM601:1 false
undefined
console.log(1!=='1')
VM606:1 true
```

## 조건문

```javascript
id = prompt('아이디를 입력하세요.');

if(id=='minkj1992'){
  pw = prompt('비밀번호를 입력하세요');
  if(pw == '123456'){
    alert('minkj1992님 반갑습니다.');
    break;
  }
  alert('비밀번호 불일치');
}else{
  alert('아이디 불일치')
}

```
`true` = `1` = `!''` = `!undefined` = `!NaN` = `!null`


## 반복문

> c.f
+ `document.write('');`
+ `console.log('');`
+ `alert('');`

## 함수


```javascript

function func1(arg1, arg2){
  code sth;
  retrun ;
}

```

## 함수를 정의하는 다른 방법

javascript anonymous function

```javascript
var numbering = function() {
  code sth;
  return sth;
}

numbering();
```

## 배열

### 배열의 생성

```javascript



var member = ['a', 'b', 'c'];
document.write(member[0]);

```

### 배열의 제어

```javascript

var arr = [1,2,3,4,5];

//길이
alert(arr.length);

//추가: 단일
arr.push('f');

//추가: 복수
arr.concat(['k','j']);

//추가: 맨 앞으로
arr.unshift('z');

//추가: 원하는 index
//splice(기준으로 부터 두번째 index, 기준index, element)
arr.splice(2,0,'B');

//제거: 맨 앞
arr.shift();

//제거: 맨 뒤
arr.pop();

//정렬
arr.sort();

//정렬: 역순
arr.reverse();

```

## 객체(dictionary)

### 객체 기본

```javascript

//객체 생성
var grades = {'minkj1992':98, 'jmu2001': 78, 'jhsoo':100};

//추가
grades['likelion06'] = 28;

//객체 생성 다른방법
var grades = new Object();
grades['someone'] = 24;

// 객체 요소 접근
alert(grades['minkj1992']);
alert(grades.minkj1992);

```
### 객체와 반복문

```javascript

var grades = {'minkj1992': 98};
for (key in grades){
  document.write("key: "+key+",  value:"+grades[key]+"<br />");
}

```
> 객체에는 객체를 담을수도, 함수를 담을 수도 있다.

```javascript

var grades = {
  'list': {'minkj1992':98, 'jmu2001': 78, 'jhsoo':100},
  'show': function(){
    for(var name in this.list){
      document.write(name+':'+this.list[name]+ "<br />");
    }
   }

};
grades.show();

```

## 모듈

> 순수한 자바스크립트에서는 모듈이라는 개념이 분명하게 존재하지는 않는다. 다만 자바스크립트가 구동되는 호스트 환경에 따라서 서로 다른 모듈화 방법이 제공되고 있다.
여기에서는 웹브라우저에서 로직을 모듈화하는 방법에 대해 알아보겠다.

> 호스팅환경: 자바스크립트가 구동되는 환경을 의미한다. 브라우저뿐만 아니라 node.js의 경우에는 서버측에서 실행된다. Google Apps Script역시 js이지만 구글 스프레드 sheet 같은 구글 제품 위에서 실행된다. 


### 모듈의 사용

```javascript
//main.html
<script src="sth_module.js"></script>
```

HTML내부에서 script태그 안의 javascript를 파일을 다운로드해서 실행시킨다. 


## UI와 API 그리고 문서 보는법

### API란
Application Programming Interface

[생활코딩_API vs UI](https://opentutorials.org/course/743/6533)

## 정규표현식

### 정규표현식 생성
정규표현식은 2가지 단계로 이뤄진다. 1) 컴파일, 2) 실행(execution)이다.

### 컴파일
컴파일은 검출하고자 하는 패턴을 만드는 일이다. 우선 정규표현식 객체를 만들어야 한다. 

+ 정규표현식 리터럴

`var pattern = /a/`

+ 정규표현식 객체 생성자

`var pattern = new RegExp('a');`

### 정규표현식 메소드 실행

정규표현식을 컴파일해서 객체를 만들었다면 이제 문자열에서 원하는 문자를 찾아내야 한다.

#### RegExp.exec()

실행결과는 문자열 a를 값으로 하는 배열을 리턴한다.
`console.log(pattern.exec('abcdef')); //["a"]`

`console.log(pattern.exec('bceret')); //null return`

#### RegExp.test()

test는 인자안에 패턴에 해당되는 문자열이 있으면 true 없으면 false return
`console.log(pattern.test('abcdef')); //true`

### 문자열 메소드 실행

문자열 객체의 몇몇 메소드는 정규표현식을 사용할 수 있다.

#### String.match() 
RegExp.exec()와 비슷하다.

`console.log('abcdef'.match(pattern)); //["a"]`

#### String.replace()

문자열에서 패턴 검색 후 변경, 이후에 변경된 값을 리턴한다.

`console.log('abcdef'.replace(pattern, 'A')); // Abcdef`

### 정규표현식 패턴 옵션
옵션에 따라서 검출되는 데이터가 달라진다.

#### i
대소문자를 구분하지 않는다.

```javascript
var xi = /a/;
console.log("Abcde".match(xi)); //null

var oi = /a/i;
console.log("Abcdef".match(oi)); //["A"]

```

#### g
g를 붙이면 검색된 모든 결과를 리턴한다.

```javascript

var xg = /a/;
console.log("abcdefg".match(xg));

var og = /a/g;
console.log("abcdea".match(og));
```

## 유효범위


+ 자바스크립트의 지역변수는 함수에서만 유효하다.
+ 자바스크립트에서 변수를 선언하는 방법에는 VAR, LET, CONST 키워드가 있다.
`let` :블록 레벨 스코프, var과 달리 중복 선언이 되지 않는다. let을 사용하면 함수내에서 반복문을 작성할 때 편리하다. 
`const` : 블록 레벨 스코프, 수정 불가, 선언하자마자 초기화 해야함. 
``` javascript
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name);
```


### 정적 유효범위

> 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping) 혹은 렉시컬(lexical scoping)이라 한다.


```javascript
var i =5;

function a(){
  var i = 10;
  b();
}

function b(){
  document.write(i); // 지역변수가 없으면 전역변수를 찾게된다.
}

a(); // 실행결과 5

```
+ 동적 유효범위
+ 정적 유효범위: 












[위로 이동](#목차)
