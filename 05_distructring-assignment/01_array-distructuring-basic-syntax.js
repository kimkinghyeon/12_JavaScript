// 배열 구조 분해 할당
// 구조 분해 할당을 사용해 배열을 변수로 '분해' 해서 연결 할 수 있다.

let nameArr = ['Gildong','Hong'];
let [firestName,lastName] = nameArr;
// let [firestName,lastName] = ['Gildong','Hong'];

// let firestName = nameArr[0];
// let lastName = nameArr[1];

console.log(firestName);
console.log(lastName);

let arr = "Saimdang Shin".split(' ');
console.log(arr);

let nameArr2 = "Saimdang Shin".split(' ');
let [firestName1,lastName1] = nameArr2
let [firestName2,lastName2] = "Saimdang Shin".split(' ');
console.log(firestName1);
console.log(lastName1);
console.log(firestName2);
console.log(lastName2);

// 쉼표를 사용해 필요하지 않은 배열 요소를 버릴 수 있다.
let [firestName3,,lastName3] = ['firestName','MiddleName','lastName']
console.log(firestName3);
console.log(lastName3);

