console.log('===== 숫자 타입으로 변환 =====');

// 산술 연산자의 피연산자는 모두 숫자여야 하기 때문에
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');
console.log(10 % 'javascript'); // NaN - 피연산자 숫자 변환 불가로 연산 수행 불가

// 비교 연산자로 크기를 비교하기 위해 숫자여야하기 때문에
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다.
console.log(10 > '5');
console.log(10 < '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로
// 암묵적 타입변환 수행
console.log(+''); // 0
console.log(+'1'); // 1
console.log(+'java'); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+function(){}); // NaN
console.log(+Symbol); // cannot convert a symbol value to a number











