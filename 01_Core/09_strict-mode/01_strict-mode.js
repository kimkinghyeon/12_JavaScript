// 엄격 모드
function test(){
    x = 10; // 암묵적으로 전역 변수가 됨
}

test();

console.log(x);

