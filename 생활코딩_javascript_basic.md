Javascript Basic
==================
# 














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



















[위로 이동](#)
