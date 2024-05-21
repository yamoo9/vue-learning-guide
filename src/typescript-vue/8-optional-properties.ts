// ------------------------------------------------------------------
// 옵셔널 프로퍼티 (Optional Properties, 선택적 속성)
// ------------------------------------------------------------------

{
  let user: {
    name: string;
    nickname: string;
    email: string;
    role: string;
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
