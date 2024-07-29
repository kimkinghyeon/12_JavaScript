/* 
object 생성자 함수
new 연산자와 함께 object 생성자 함수를 호출하면 빈 객체를 생성해 반환한다.
빈 객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성
 */
// 빈 객체 생성
const student = new Object();
// const student = {}; 객체 리터럴 방식

// 프로퍼티 추가
student.name = 'ddd'
student.age = 300;
console.log(student);
