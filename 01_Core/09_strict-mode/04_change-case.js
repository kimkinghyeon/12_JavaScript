// 변화 상황
// 1. 일반 함수의 this
(function(){
    'use strict'
    function test(){
        console.log(this);
        // 엄격모드에서는 일반 this 함수의 사용을 제한하고
        // 생성자 함수의 this 만 허용한다.
    }
    test(); // undefined
    new test(); // test{}
}());