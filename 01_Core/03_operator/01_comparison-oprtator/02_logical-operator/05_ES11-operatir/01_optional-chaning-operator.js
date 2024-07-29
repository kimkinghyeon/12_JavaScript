/*
옵셔널 체이닝 연산자
좌향의 피연산자가 null 또는 undefuned 인 경우
undefined 를 반환하고 그렇지 않으면 우항 프로퍼티 참조로 이어간다.

=> 참조될 대상이 존재하는지 불확실할때 검증하는 역할로 사용*/

var obj= null;
// let vel = obj.value; // cannot read properties of null

var val = obj?.value;
console.log(val);

var val = obj && obj.value;
console.log(val);
// falsy 값에 따라 결과가 바뀜''

console.log('------------------');

var str = ''

var len = str?.length;
console.log(len);
// 빈 문자열은 null 또는 undefined 가 아니므로 문자열의 길이 값이 담긴다.





