// ------------------------------------------------------------------
// 애니 타입 (Any Type, 타입 검사 안함)
// ------------------------------------------------------------------

{
  // 명시적 any 타입 설정
  let anyting: any = 'anyting';

  anyting = 120901;
  anyting = false;
  anyting = null;
  anyting = undefined;

  anyting();
  anyting.unknownMethod();
}

{
  const movies = ['리멤버', '인생은 아름다워', '아인보:아마존의 전설'];

  // 타입 에너테이션이 설정되지 않아 암묵적으로 any 타입 설정
  // 하지만 함수 타입 실행의 경우 오류 경고 (아래 @ts-ignore 주석 삭제)
  let foundMovie;

  // 명시적으로 any 타입을 지정할 경우 타입 검사 전혀 수행하지 않음
  // let foundMovie: any;

  // 타입 에너테이션을 설정하면 타입 검사를 수행
  // let foundMovie: string;

  for (const movie of movies) {
    if (movie.indexOf('아마존') > -1) {
      foundMovie = movie;
    }
  }

  // @ts-ignore
  foundMovie();
  foundMovie = 101;
}
