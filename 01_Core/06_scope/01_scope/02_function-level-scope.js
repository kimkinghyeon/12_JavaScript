// 함수 레벨 스코프
/* var 키워드로 선언된 변수는 오로지 함수의 코드블록(몸체) 만을 지역 스코프로 인정하는 함수 레벨 스코프 */

// 전역변수
var i = 0;
// 전역변수로 선언된 i 에 중복 선언된다.
for(var i = 0; i < 10; i++){ 
}
console.log(i);
