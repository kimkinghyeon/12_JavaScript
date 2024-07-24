/* 
명시적 타입 형변환
-> 개발자의 의도에 따라 타입 변환을 하는것
*/

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); // "10"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(true)); // "true"
console.log(String(false)); // "false"

// 2. Object.prototype.toString 메소드 사용
console.log('===== toString 사용 =====');

console.log((10).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString());

