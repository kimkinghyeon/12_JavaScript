// 함수의 (디폴트) 프로퍼티 프로토타입과 constructor(생성자) 프로퍼티
// 모든 함수는 기본적으로 prototype 프로퍼티를 갖는다.
function Student() {};
Student.prototype = { constructor : Student }
// console.log(Student.prototype.constructor);
// 디폴트 프로퍼티 'prototype' 은 constructor 프로퍼티 하나만 있는
// 객체를 가리킨다. 여기서 constructor 는 함수 자신을 가르킨다.
console.log(Student.prototype.constructor);
console.log(Student.prototype.constructor === Student); // true
let student = new Student(); // { constructor : Student } 상속 받음
// true 라고 나온건 [[prototype]]을 거쳐서 접근 함을 의미하고
// Stdent를 상속받다는 것을 확인
console.log(student.constructor === Student);

