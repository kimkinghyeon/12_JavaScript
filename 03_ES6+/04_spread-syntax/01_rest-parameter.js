// rest Pramter (나머지 매개변수)...
function merge(msg1,msg2){
    return msg1 + msg2;
}
console.log(merge('안녕하세요.!'));
console.log(merge('안녕하세요.!','반갑습니다.!'));
console.log(merge('안녕하세요.!','반갑습니다.!','id'));

function merageAll(...args){
    let message = '';
    for(let arg of args) message += arg;
    return message;
}
console.log(merageAll('안녕하세요.!'));
console.log(merageAll('안녕하세요.!','반갑습니다.!'));
console.log(merageAll('안녕하세요.!','반갑습니다.!','id'));

// 나머지 매개변수 (...) 은 항상 마지막에 있어야 한다.
// function func (arg1, ... args, arg2) {} => (x)
// function func (arg1, args , ... args) {} => (o)