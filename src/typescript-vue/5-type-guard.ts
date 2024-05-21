// ------------------------------------------------------------------
// 타입 가드 (Type Guard, 유형 보호)
// ------------------------------------------------------------------

import user from '../data/user';

{
  let notKnown: unknown = user.role;

  notKnown = null;
  notKnown = false;
  notKnown = 120901;
  notKnown = undefined;

  // 타입 가드
  // notKnown 타입이 함수일 때만 실행되도록 설정
  notKnown();

  // notKnown 객체의 unknownMethod 속성 타입이
  // 함수인 경우에만 실행되도록 설정
  notKnown.unknownMethod();
}

{
  // any 타입을 명시하면 모든 타입 검사 무시
  let anyting: any = user.role;

  anyting = 120901;
  anyting = false;
  anyting = null;
  anyting = undefined;

  anyting();
  anyting.unknownMethod();
}
