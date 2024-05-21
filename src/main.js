/*

[ ECMAScript (JavaScript) ]

JavaScript는 태생적으로 타입을 지정하는 방법을 제공하지 않습니다.

변수에 문자열에 할당하면 JavaScript는 변수의 타입이 문자열인지 인식하지 못합니다.
단지 변수가 어떤 종류의 객체를 가리키는 이름이라는 것만 알고 있을 뿐입니다.

그래서 JavaScript는 오류가 발생할 수 있는 가능성에 대해 전혀 알지 못합니다.
이유는 타입 선언을 할 수 없는 프로그래밍 언어이기 때문입니다. 즉, 언어 엔진에 
"어떤 이 변수가 타입인지 알려주지 않는다"는 의미입니다.

[ TypeScript ]

반면, TypeScript는 타입을 지정할 수 있는 JavaScript 확장 프로그래밍 언어입니다.

TypeScript 공식 웹사이트(https://typescriptlang.org)에 방문하면
"타입 구문을 포함하는 JavaScript"라고 TypeScript를 소개합니다.

TypeScript는 타입을 지정할 수 있어 프로그램 실행 전, 발생할 수 있는 
오류의 가능성을 사전에 파악할 수 있어 웹 개발자에게 매우 인기있습니다.

TypeScript의 유용함은 직접 사용해보면 알 수 있습니다.

예를 들어, 아래 JavaScript 코드는 에디터 상에서 
어떤 문제가 발생할 가능성에 대해 말하지 않습니다.

*/

import user from './data/user';

console.log(user.name);
console.log(user.age);
console.log(user());

/* 

JavaScript는 user 데이터 타입이 무엇인지 알 수 없습니다.
그저 개발자가 정의된 이름으로 타입을 유추할 뿐입니다.

- user          → 사용자 정보가 아닐까?
- getUser       → 사용자 정보를 가져오는 함수일 듯?
- isUserLogined → 로그인 유무를 반환하는 불리언인 듯?

만약 타입을 지정할 수 있고, 프로그래밍 언어가 타입을 알고 있다면
사전에 발생할 수 있는 문제의 가능성을 개발자에게 친절하게 안내해줄 것입니다. 😃

main.js 파일을 복사한 후, main.ts 확장자로 변경해 비교해봅시다.


[ TSC : TypeScript Compiler ]

TypeScript는 웹 브라우저에서 바로 실행할 수 없습니다.
웹 표준이 아닌 기술이기 때문입니다. 웹 브라우저에서 실행 가능한 
표준 스크립트 언어는 ECMAScript(JavaScript) 입니다.

그러므로 TypeScript 컴파일러를 사용해 JavaScript로 
변환해야만 웹 브라우저에서 정상적으로 실행됩니다.


[ Vite : TypeScript Support ]

Vite 개발 도구는 기본적으로 TypeScript를 지원합니다.
그러므로 TypeScript 코드를 바로 브라우저에서 사용할 수 있도록 변환합니다.
다만, 빠른 변환을 위해 타입 검사는 생략합니다. 타입 검사는 IDE 또는 
빌드 프로세스에서 수행된다고 가정합니다.

https://ko.vitejs.dev/guide/features.html#typescript

*/
