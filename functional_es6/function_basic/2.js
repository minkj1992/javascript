const log = console.log;

// const apply1 = f => f(1); // 함수를 인자로 받고 상태를 주입시키는 함수
// const add2 = a => a+2 // 함수
// log(apply1(add2))
// log(apply1(a => a-1));

// const times = (f,n) => {
//     let i = -1;
//     while(++i < n) f(i);
// };

// times(log,3);

// times(a => log(a + 10), 3);

// 클로저 생성 함수

const addMaker = a => b => a+b;
const add10 = addMaker(10);

log(add10(5));
log(add10(10));