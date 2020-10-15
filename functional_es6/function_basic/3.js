const log = console.log;

const list = [1, 2, 3];
for (const a of list) log(a);

const str = 'abc';
for (const c of str) log(c);

const arr = [1,2,3,4,5];
let iter1 = arr[Symbol.iterator]();
log(iter1);
log(typeof(iter1));
// error: log(iter1()); 
// error: log(typeof(iter1()));
for (const a of iter1) log(a);

const set = new Set(arr);
for (const s of set) log(s);
for (const s of set) log(s); // 신기하게 다시 상태를 초기화 한다.
for (const rs of Array.from(set).reverse()) log(rs); // reverse

// python like enumerate & comprehension
const enumerate = (arr) => arr.map((e,i) => [i,e]);
log(enumerate(arr));
log(typeof(enumerate));
log(typeof([arr.map((e,i) => [i,e])]));

// map (2d array로 init도 가능)
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [k,v] of map) log(k,v);
