서버는 port를 리스닝하고 있다.
ip: 어떤 컴퓨터를 식별하는 식별자
port: 그 컴퓨터 안에 설치된 여러 서버들 중에서 어떤 서버를 사용할지에 대한 식별자

하나의 서버는 여러 ip를 가질 수 있는데 어떤 ip를 타고들어온 사용자를 허용할 것인지를 지정하기 위해서 hostname(127.0.0.1)

hostname host개념? 
 
모듈,  require('모듈이름') = 객체를 return한다.

메소드 = 함수

npm =  node package(여러개 module) module

uglify.js (npm) 공백제거하는 패키지
(uglified 시킨 파일 명칭은 minified 되었다고 하여 pretty.min.js)

##npm
1) 다른 사람의 패키지를 가져올 수 있는 준비 완료
npm init: 다른 사람의 모듈 가져오기 위해서는 해당 디렉토리가 npm으로 되어있어야 한다.(즉 우리의 프로젝트 폴더는 npm의 package의 디렉토리로 선언한 것이다. 	)  -> package.json 파일 생성됨

2) npm install underscore(원하는 패키지) --save(플래그, package.json에 underscore 패키지의 버전이 저장됨(dependency 저장), -g 는 독립적으로 npm을 사용하겠다는 global하게 사용하겠다는 뜻, 생략되면 해당 주소에 프로젝트의 부품으로 사용하겠다는 뜻)

* --save 즉 dependency가 저장 되면, 새로운 폴더에서 npm init 시킨 폴더를 연다고 해도 dependency와 관련된 버전의 패키지를 쉽게 가져올 수 있다. 

* underscore라이브러리는 javascript의 부족한 함수들을 매꿔주는 유명한 라이브러리

## callback 
> callback 불려진다는 뜻

+ callback 함수 = 함수(callback){callback(){};}, 
+ 함수의 인자로 함수를 넣어줌, 그 인자 함수가 callback함수
+ callback함수는 미리 정의 해도 되고, lambda처럼 anonymous func 해도 된다.

## 동기와 비동기
+ synchronous vs Asynchronous

> ex) 동기적으로 일을 처리한다면, 이메일을 1만명에게 보낸다고 예를 들자면 1명 보내고 그다음 사람 1명 보내고 하고 이후에 1만명 다 보내고 나서 "보냈다"라고 msg가 뜬다.
비동기적: 시작하자마자 "보냈다" msg가 뜨고, email 보내는 프로그램이 따로 1만명에게 메일을 보낸다. 다 보내고 나서는 다 보냈다고 msg가 떠지겠지

+ File system
node.js는 default가 비동기이고, 함수에 sync가 붙여져 있으면 동기적 처리.

//sync
task1
sync task2
task3

//작업순서: 1 -> 2 -> 3

//async
task1
async task2
task3

//작업순서: 1-> 3 -> 2
//task2를 사용할때 callback함수가 대부분 사용된다. ( 즉 업무를 위탁할 callback함수가 필요하다)

## Express 도입, 설치, 간단한 웹앱 만들기

express는 웹앱을 손쉽게 만들수 있도록 도와주는 framework이다.

* 관습적으로 app.js가 프로젝트를 실행하는 entry 파일이름이다. 

## 연결성

npm: 그릇 (여러 모듈들을 합칠 수 있다. ex) express + jade + underscore)
module: 그릇에 들어가 구성 요소들(부품)

node.js: os, file, https 부품들
javascript: 의 문법으로 node.js 부품들을 연결시킬 수 있다.

router
controller

## Express 정적파일을 서비스 하는법

```javascript

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('Hello home page');;
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});

```

## Express 동적
```javascript

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('Hello home page');;
});
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>`;
  res.send(output);
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});

```

## Express 템플릿 엔진(jade)





 

