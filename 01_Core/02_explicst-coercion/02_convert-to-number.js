// 1. number 생성자 함수를 new 연산자 없이 호출
console.log(Number("10"));
console.log(Number("10.01"));
console.log(Number("true"));
console.log(Number("false"));

//2. parseInt ,parseFloat 함수 이용 (문자열 -> 숫자)
console.log('===== parse =====');


console.log(parseInt('10'));
console.log(parseFloat('10'));
console.log(parseInt('10.01')); // 10 인트형이기 때문에 소수점은 사용하지 않음
console.log(parseFloat('10.01'));



