// [[prototype]]

const user = {
    activate : true,
    login : function(){
        console.log("로그인");
    }
}
const student = {
    passion : true
}
// .__proto__ = ; [[prototype]]의 getter ,setter 이다.
// 주로 함수 Object.getPrototypeOf or Object.setPrototypeOf
// 이 두 메서드를 통해서 get,set 한다.
student.__proto__ = user;

console.log(student.activate);
student.login();

console.log('----- 프로토 타입 체인 -----');
const greedyStudent ={
    class : 11,
    __proto__:student
}
console.log(greedyStudent.activate); // user
console.log(greedyStudent.passion);  // passion

/* 
프로토타입 체이닝은 순환참조가 허용되지 않는다.
__proto__ 의 값은 객체 또는 null 만가능하며 다른 자료형은 무시한다.
*/


