# node

> about node

## Node.js는 정말 단일 스레드일까?

> https://medium.com/better-programming/is-node-js-really-single-threaded-7ea59bcc8d64

- tl;dr
  - Node.js에는 두 개의 스레드가 있고, 하나의 스레드는 이벤트 루프를 담당하고 다른 하나는 프로그램 실행을 담당합니다. (하지만 실제 request를 처리하는 main thread는 1개)
  - nodejs 기반이 되는 libuv 라이브러리는 워커 쓰레드풀(default 4개)이 생성합니다. 즉 main thread에서 block/non block을 판단하고 이벤트 루프에 요청을 보내면 이벤트 루프는 libuv 쓰레드 풀 worker에 작업을 deletgate시킴

## nodejs의 내부 동작 원리 (libuv, 이벤트루프, 워커쓰레드, 비동기)

> https://sjh836.tistory.com/149
