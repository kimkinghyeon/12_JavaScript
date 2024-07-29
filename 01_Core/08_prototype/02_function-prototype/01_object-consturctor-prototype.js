// 함수의 프로토타입

// 생성자 함수의 프로토타입
// new 연산자를 사용해서 만든 객체는
// 생성자 함수의 프로토타입 정보를 사용해 [[prototype]]을 설정한다.
const user = {
    activatre : true,
    login : function(){
        console.log('login');
    }
};
function Student(name){
    this.name = name;
};
// 여기서 프로토타입은 앞에서 배운 내용과 이름만 같을 뿐
// 실질적으로 일반적인 프로퍼티 생성
Student.prototype = user;

let student = new Student('ddd');
console.log(student.activatre)
console.log(student);
;
