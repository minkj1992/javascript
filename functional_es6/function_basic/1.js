const log = console.log;

const a = 10;
const add10 = a => a+10;
const r = add10(a);
log(r);

const add5 = a => a+5;
log(add5);
log(add5(5));

const f1 = () => () => 1;
log(f1);
log(f1());
log(f1()());

const f2 = f1();
log(f2);
log(f2());