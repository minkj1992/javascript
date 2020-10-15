const log = console.log;

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        // multipl returns
        return {
            next(){
                return i==0 ? {done: true} : {value: i--, done:false};
            },
            [Symbol.iterator](){
                return this;
            }
        }
    }
};

let iterator = iterable[Symbol.iterator]();
// iterator.next();
// iterator.next();
// iterator.next();
for (const v of iterator) log(v);

