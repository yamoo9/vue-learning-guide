// ------------------------------------------------------------------
// 언노운 타입 (Unknown Type, 알 수 없는 유형 : vs. any)
// ------------------------------------------------------------------

import user from '../data/user';

{
  // 명시적 unknown 타입 설정
  let notKnown: any = user.role;

  notKnown = null;
  notKnown = false;
  notKnown = 120901;
  notKnown = undefined;

  notKnown();
  notKnown.unknownMethod();
}
