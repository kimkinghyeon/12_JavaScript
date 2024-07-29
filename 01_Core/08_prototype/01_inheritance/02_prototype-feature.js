const user = {
    id : 'user',
    login : function(){
    console.log(`${this.id}로그인`);
    }
};

const student = {
    __proto__ : user
};

// 프로토타입은 프로퍼티를 읽을때만 사용하며
// 프로퍼티를 추가 , 수정, 삭제 하는 연산은 객체에다가 직접한다.
student.id ='user01';
console.log(student);
/* 
login 메소드 내의 this 는 프로토 타입에 영향을 받지 않고,
메소드를 객체에 호출했던, 프로토타입에서 호출했던 상관없이
this 언제나 .앞에 있는 객체이다.
*/
console.log("==========");
for(let prop in student){
    // for in 반복문은 상속 프로퍼티도 순회 대상에 포함
    console.log(prop)
    /*
    hasOwnProperty()
    key에 대응하는 프로퍼티가 상속 프로퍼티가 아니고 object에 직접 구현되어있는
    프로퍼티 일때만 true 를 반환한다.
    */ 
   let isOwn = student.hasOwnProperty(prop);
   if(isOwn){
    console.log(`객체 자신의 프로퍼티 ${prop}`);
   } else {
    console.log(`상속 프로퍼티 ${prop}`);
   }
}



