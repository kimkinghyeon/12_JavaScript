// return 반환문
function hello(name){
    return `${name} 으하하핳하핳`;
// 반환문 이후 문장은 실행되지 않고 무시한다.
console.log(name);

}

// 반환문은 리턴 키워드 뒤에 오는 값을 반환한다.
console.log(hello('좋소냥'));

function func() {
    console.log('함수가 호출됨');
    // return ;
}

// 반환값을 명시적을 지정하지 않으면 undefined 가 반환
console.log(func());

// 반환문을 생략할 수도있다. 이경우에도 undefined 가 반환

