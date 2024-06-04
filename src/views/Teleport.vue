<script setup lang="ts">
import AppDialog from '@/components/AppDialog.vue';
</script>

<template>
  <main class="teleportDemo">
    <AppDialog label="Modal Dialog">
      <ul class="list">
        <li>
          <p>
            <code>position: fixed</code>는 상위 요소에 <code>transform</code>,
            <code>perspective</code> 또는 <code>filter</code> 속성이 설정되지 않은 경우에만 뷰포트를
            기준으로 요소를 배치합니다.
            <a
              href="https://developer.mozilla.org/ko/docs/Web/CSS/position#fixed"
              target="_blank"
              rel="noopener noreferrer"
              >참고</a
            >
          </p>
          <p>
            예를 들어 CSS 트랜지션으로 상위 요소에 애니메이션을 적용하려는 경우 모달 레이아웃이
            깨집니다!
          </p>
        </li>
        <li>
          모달의 <code>z-index</code>는 모달을 포함하는 엘리먼트에 의해 제한됩니다. 상위 요소와
          겹치고 <code>z-index</code>가 더 높은 또 다른 요소가 있으면 모달을 덮을 것입니다.
        </li>
      </ul>
    </AppDialog>

    <section class="section">
      <h2>Teleport</h2>
      <p>
        <a
          href="https://ko.vuejs.org/api/built-in-components.html#teleport"
          target="_blank"
          rel="noopener noreferrer"
          >&lt;Teleport&gt;</a
        >는 컴포넌트 템플릿 일부를 해당 컴포넌트의 DOM 계층 외부 DOM 노드로 "이동"할 수 있게 해주는
        빌트인 컴포넌트입니다.
      </p>
      <p>
        이 컴포넌트는 컴포넌트 템플릿의 일부가 논리적으로 컴포넌트 트리에 속하지만, 시각적 관점에서
        Vue 앱 외부의 다른 DOM 위치 어딘가에 표시되어야 합니다.
      </p>
      <p>
        이 컴포넌트의 가장 일반적인 사용 예는
        <a
          href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog"
          target="_blank"
          rel="noopener noreferrer"
          >모달 다이얼로그(Modal Dialog)</a
        >입니다. 이상적으로는 다이얼로그 버튼과 다이얼로그 자체가 동일한 컴포넌트 내에 있기를
        원합니다. 둘 다 다이얼로그의 열기 / 닫기 상태와 관련이 있기 때문입니다.
      </p>
      <p>
        하지만 이는 다이얼로그가 버튼과 함께 렌더링되고 앱의 DOM 계층 구조에 깊숙이 중첩되어 있음을
        의미합니다. 이것은 CSS를 통해 다이얼로그를 배치할 때 몇 가지 까다로운 문제를 일으킬 수
        있습니다.
      </p>
    </section>
  </main>
</template>

<style scoped>
.teleportDemo {
  scale: 1;

  .list {
    list-style: none;
    padding-inline-start: 0;
    margin-block: 0;

    li {
      padding-block: 12px;
      font-size: 19px;
      line-height: 1.7;
      color: #133a29;
    }
  }

  :deep(code) {
    display: inline-block;
    border-radius: 2px;
    padding: 4px;
    line-height: 1;
    background: #35986b;
  }

  .section {
    inline-size: 540px;
    margin-block: 40px;
    line-height: 1.7;

    h2 {
      font-size: 32px;
      margin-block: 0 1rem;
    }

    p {
      margin-block: 0 1rem;
      font-size: 16px;
    }
  }

  :deep(a) {
    line-height: 1;
    border-radius: 4px;
    padding: 2px 4px;
    vertical-align: 1px;
    color: #fbc02d;
    background: #10171e;
    text-decoration: none;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
