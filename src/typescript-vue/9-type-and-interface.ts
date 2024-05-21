// ------------------------------------------------------------------
// 타입 vs. 인터페이스 (Type vs. Interface)
// ------------------------------------------------------------------

// type alias -------------------------------------------------------
{
  let user: {
    name: string;
    nickname: string;
    email: string;
    role?: string;
  };

  user = {
    name: '지훈',
    nickname: '야무',
    email: 'yamoo9@naver.com',
    role: '강사',
  };

  const user2: typeof user = {
    name: '박하연',
    nickname: '박하',
    email: 'parkha@google.com',
  };

  console.log(user2.role);
}

// interface -------------------------------------------------------
{
  let user: {
    name: string;
    nickname: string;
    email: string;
    role?: string;
  };

  user = {
    name: '지훈',
    nickname: '야무',
    email: 'yamoo9@naver.com',
    role: '강사',
  };

  const user2: typeof user = {
    name: '박하연',
    nickname: '박하',
    email: 'parkha@google.com',
  };

  console.log(user2.role);
}

// type vs. interface ----------------------------------------------

{
  type Dog = {
    kind: string;
  };

  // 새로운 속성 추가
  // type의 경우, 동일 이름 존재 허용 안함

  // type Dog = {
  //   age: number;
  // };

  const pome: Dog = {
    kind: '포메라니언',
    age: 3,
  };

  console.log(pome);
}

{
  interface Dog {
    kind: string;
  }

  // 새로운 속성 추가
  // interface의 경우, 동일 이름 존재 가능

  // interface Dog {
  //   age: number;
  // };

  const yoke: Dog = {
    kind: '요크셔테리어',
    age: 2,
  };

  console.log(yoke);
}

{
  type Dog = {
    kind: string;
  };

  // 다른 타입 확장
  // type의 경우, 인터섹션(&) 또는 유니언(|) 활용

  // type ExtendDog = {
  //   age: number;
  // };

  const pome: Dog = {
    kind: '포메라니언',
    age: 3,
  };

  console.log(pome);
}

{
  interface Dog {
    kind: string;
  }

  // 다른 인터페이스 확장
  // interface의 경우, 익스텐드(extends) 활용

  // interface ExtendDog {
  //   age: number;
  // };

  const yoke: Dog = {
    kind: '요크셔테리어',
    age: 2,
  };

  console.log(yoke);
}
