var dog = {
    name : '구찌'
};

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
dog.name = '가린';
console.log(dog);
// 프로퍼티 동적 추가
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어
// 추가되고, 프로퍼티 값이 할당
dog.age = 3;
console.log(dog);

delete dog.age;
console.log(dog);

// 존재하지 않는 프로퍼티를 삭제하면 에러없이 무시함
delete dog.something;
console.log(dog);




