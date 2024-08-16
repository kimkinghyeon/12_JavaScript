// 스프레드 문법
/*
rest parameter 처럼 매개변수 목록을 배열로 가져오는 것과 반대로
뱅ㄹ을 통째로 매개변수에 넘겨주는 기능
하나로 뭉쳐 있는 여러 값들의 집합을 전개해서 개별적인 값들의 목록으로 만든다.
사용처
for ... of 문으로 순회할 수 있는 = 이터러블 한정된
*/
console.log(`가장큰값 : ${ Math.max(10,20,30)}`);
let arr = [10,20,30];
console.log(`가장큰값 : ${ Math.max(...arr)}`);
// max() 메서드는 배열이 아닌 숫자 목록을 인수로 받기 때문에
// 배열의 경우 원하는대로 동작하지 않음
// 함수를 호출할때 ...arr 를 이용하면 인수 목록으로 확장된다.

let arr1 = [10,30,20];
let arr2 = [100,300,200];
// 배열 여러개 사용가능
console.log(`가장 작은값 : ${ Math.min(...arr1,...arr2)}`);
// 일반값과 혼합해서 사용 가능
console.log(`가장 작은값 : ${ Math.min(...arr1,5,...arr2,3)}`);
// 배열 병합에도 사용이 가능하다.
let merged = [...arr1,...arr2];
console.log(merged);

// 문자열
let str = 'javascript';
console.log([...str]);
console.log(Array.from(str));

