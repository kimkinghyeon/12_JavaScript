const num = new Number(100);
// const num = {};
// num 은 Number.prototype 을 상속 받았는가ㅣ?
// console.log(num.__prototype__ === Object.prototype);

// num 은 Object.prototype 을 상속 받았는가ㅣ?
// console.log(num.__prototype__.__prototype__ === Object.prototype);

// 체인 맨 위에는 null 이 있다.
// console.log(num.__prototype__.__prototype__.__prototype__ === null);

// 참고

// 내장 프로토타입은 수정이 가능하다.
String.prototype.hello = function() {
    console.log(`hellos,${this}`);
}
"Javascript".hello();

// 내장 프로토타입의 메서드를 빌려서 새로운 메서드를 만드는것이 가능
const obj = {
    0 : "hello",
    1 : "JavaScript",
    length: 2,
}
obj.join = Array.prototype.join;
console.log(obj.join);
console.log(obj.join(','));

