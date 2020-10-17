const {log} = console;

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? {done: true} : {value: i--, done: false};
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iterator = iterable[Symbol.iterator]();
// iterator.next();
// iterator.next();
// iterator.next();
for (const v of iterator) log(v);


for (const a of document.querySelectorAll('*')) log(a);
const all = document.querySelectorAll('*');
const iter3 = all[Symbol.iterator]();
log(iter3.next());
