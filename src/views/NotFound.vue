<template>
  <main>
    <h1>페이지를 찾을 수 없습니다.</h1>
    <p><a href="#/">홈 페이지</a>로 이동해 내비게이션을 이용해보세요. 😃</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  a {
    opacity: 0.7;
    color: #fbc02d;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
