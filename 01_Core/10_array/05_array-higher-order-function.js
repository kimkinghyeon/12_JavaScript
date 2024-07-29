/* 
배열의 고차함수
고차 함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수 
 */

// Array.prototype.sort : 배열의 정렬 기준으로 정렬
let numbers = [];

// 10개의 1~ 100 까지 정수를 numbers 배열에 담아준다.
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
    // Math.floor 반올림? 소수점 자르기?
}
console.log(`정렬전 numbers : ${numbers}`);
numbers.sort(); // 정렬
// 배열이 기본적으로 문자열 정렬이 되므로, 한자리수, 세자리수가 올바르게 정렬이 되지않음
console.log(`정렬후 numbers : ${numbers}`);

// 오름차순 정렬
console.log('========== 오름차순  ==========');
function compare(a, b) {
    if (a > b) return 1; // a 를 b 보다 뒤에 위치시킴
    if (a == b) return 0; // a 와 b 의 순서를 변경하지 않음
    if (a < b) return -1; // a 를 b 보다 앞에 위치시킴 
}
numbers.sort(compare)
console.log(` 오름차순 정렬 후 numbers : ${numbers}`);

console.log('========== 내림차순  ==========');
numbers.sort((a, b) => b - a)
console.log(` 내림차순 정렬 후 numbers : ${numbers}`);

// Array.prototype.forEach : for문을 대체할 수 있는 고차함수

/* 
함수형 프로그래밍
순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을
제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
*/

numbers = [1, 2, 3, 4, 5];
// 배열.forEach(function(item, index, array){
// 배열의 각 요소에 실행할 기능 작성
// })
console.log('========== forEach  ==========');
numbers.forEach(function (item, index, array) {
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})

console.log('========== item * 10  ==========');

// 각 요소별로 * 10 한값을 출력
numbers.forEach(item => console.log(item * 10));

console.log('========== map  ==========');
// Array.prototype.map : 배열의 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성 된 새로운 배열 반환
// 콜백함수 : 다른 함수의 내부로 전달되는 함수
const types = [true, 1, `text`].map(item => typeof item);
console.log(`types : ${types}`);

const length = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`length: ${length}`);

console.log('========== filter  ==========');
// Array.prototype.filter : 배열 요소의 전체를 대상으로 콜백 함수 호출 후 반환값이 true
// 자바스크립트에서는 조건문에 % 2 나누었을때 짯우면 0 홀수면 1
const odds = numbers.filter(item => item % 2  );
// 짝수 판별
const even = numbers.filter(item => item % 2 === 0 );
console.log(`odds : ${odds}`);
console.log(`even : ${even}`);

console.log('========== some  ==========');
// Array.prototype.some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인(Boolean 반환)

// 배열 내 요소 중 10 보다 큰 숫자가 있는지?
let result = [1,5,3,2,4].some(item => item > 10)
console.log(`result : ${result}`); // false
// 배열 내 요소 중 3 보다 큰 숫자가 있는지?
let result2 = [1,5,3,2,4].some(item => item > 3)
console.log(`result2 : ${result2}`); // true

// 이 배열에서 egg가 존재하는지 확인
arr1 = ['apple','banana','cat','dog'].some(item => item == 'egg')
console.log(`${arr1}`);
// 이 배열에 dog 가 존재하는지 확인
arr1 = ['apple','banana','cat','dog'].some(item => item == 'dog')
console.log(`${arr1}`);

console.log('========== every  ==========');
// Array.prototype.every : 배열내 모든 요소가 콜백함수의 테스트를 통과하는지 확인

// 배열 내에 모든 숫자가  3 보다 큰지
result = [1,5,3,2,4].every(item => item > 3);
console.log(`result : ${result}`); // false
// 배열 내에 모든 숫자가  0 보다 큰지
result2 = [1,5,3,2,4].every(item => item > 0);
console.log(`result2 : ${result2}`); // true

console.log('========== find , findIndex  ==========');

// Array.prototype.find : 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수를 실행 그결과가 참인 첫번째 요소를 반환
// 만약, 참인 요소가 존재하지 않으면 undefined
// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수를 실행 그결과가 참인 첫번째 요소의 인덱스를 반환
// 만약, 참인 요소가 존재하지 않으면 -1
const student = [
    {name :'aaa',score : 100},
    {name :'bbb',score : 900},
    {name :'ccc',score : 300},
    {name :'aaa',score : 200},
];

// 존재하면
result = student.find(item => item.name === 'aaa');
console.log(result); // { name: 'aaa', score: 100 }
result = student.findIndex(item => item.name === 'aaa');
console.log(result); // 0
// 존재하지 않으면
result = student.find(item => item.name === 'ddd');
console.log(result); // undefined
result = student.findIndex(item => item.name === 'ddd');
console.log(result); // -1

// find , findIndex : 일치하는 요소를 찾으면, 더이상 탐색을 하지 않음 -> 하나의 요소, 인덱스만 반환
// 60 점 이상의 학생들을 전부 알고싶으면?
// filter 는 콜백 함수의 실행 결과가 true인 배열 요소 값만 추출해서 배열로 반환
console.log('========== filter , find 비교  ==========');
// find 하나만 찾음
result = student.find(item => item.score >= 200);
console.log(result);
// filter 여러개 찾음
result = student.filter(item => item.score >= 300);
console.log(result);
result = student.filter(item => item.name == 'aaa');
console.log(result);

















