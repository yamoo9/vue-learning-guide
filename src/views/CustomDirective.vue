<script setup lang="ts">
import { ref } from 'vue';

const fontSize = ref<number>(18);
const letterSpacing = ref<number>(0);
const lineHeight = ref<number>(1.7);
</script>

<template>
  <div class="contentsController">
    <div class="controller">
      <label for="adjustFontSize">글자 크기 조정 ( {{ fontSize }}px )</label>
      <input type="range" id="adjustFontSize" min="12" max="42" v-model="fontSize" />
    </div>
    <div class="controller">
      <label for="adjustFontSize">자간 조정 ( {{ letterSpacing }}px )</label>
      <input type="range" id="adjustFontSize" min="0" max="5" step="0.1" v-model="letterSpacing" />
    </div>
    <div class="controller">
      <label for="adjustFontSize">행간 조정 ( {{ lineHeight }} )</label>
      <input type="range" id="adjustFontSize" min="1" max="6" step="0.1" v-model="lineHeight" />
    </div>
  </div>

  <div
    class="contents"
    v-font-size="fontSize"
    v-letter-spacing="letterSpacing"
    v-line-height="lineHeight"
  >
    <p>
      Vue.js 코어에 포함된 기본 디렉티브 세트(예: <code>v-model</code>,<code> v-show</code>
      등) 외에도 사용자가 정의해 사용할 수 있는 커스텀 디렉티브를 정의할 수 있습니다.
    </p>
    <p>
      Vue에는 코드를 재사용할 수 있는 2가지 방법을 제공합니다. 하나는 빌딩 블록을 재사용할 때
      사용하는
      <a
        href="https://www.notion.so/bc064e3f8974481b93dc7fc4f2a1a164?pvs=21"
        target="_blank"
        rel="noopener noreferrer"
        >컴포넌트</a
      >, 다른 하나는 상태 로직을 재사용하는데 사용하는
      <a
        href="https://www.notion.so/4e256b6f813a42fc8bae252f4196d0ed?pvs=21"
        target="_blank"
        rel="noopener noreferrer"
        >컴포저블</a
      >입니다.
    </p>
    <p>
      반면 커스텀 디렉티브의 주 사용처는 DOM 요소 접근 및 조작과 관련된 로직을 재사용하는 것입니다.
      커스텀 티렉티브는 컴포넌트 라이프 사이클 훅을 포함하는 객체처럼 정의됩니다. 커스텀 디렉티브의
      라이프 사이클 훅은 디렉티브가 연결된 요소를 수신합니다.
    </p>
  </div>
</template>

<style>
p {
  text-decoration: underline;
}
</style>

<style scoped>
/* 전역 스타일로 설정 됨 */
/* :global(p) {
  text-decoration: underline;
} */

.contentsController {
  position: fixed;
  top: 52px;
  left: 0;
  right: 0;
  padding: 20px 20px 20px 40px;
  background: #41b883;
  color: #fff;
  font-size: 14px;
  display: flex;
  gap: 6px;
  flex-flow: column;

  .controller {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    inline-size: 240px;
  }

  label {
    color: #181a20;
    font-weight: 500;
    font-size: 12px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100px;
    background-color: #282c35;
    height: 6px;
    border-radius: 6px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      width: 8px;
      height: 8px;
      background: #8ff8c9;
      border-radius: 50%;
    }
  }
}

.contents {
  overflow: auto;
  inline-size: 640px;
  block-size: 320px;
  font-size: 18px;
  line-height: 1.7;
  letter-spacing: 0;
  font-weight: 300;
  border: 0.5px solid #41b883;
  padding: 20px;
  background: #0a0a0a;
  color: #2fc481;
  transition: all 0.3s ease;

  code {
    display: inline-block;
    color: #0a0a0a;
    background: #41b883;
    margin-inline: 1px;
    padding: 0 4px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    translate: 0 -2px;
    line-height: 1.4;
  }

  * {
    margin: 0;
  }

  p {
    margin-block-end: 1rem;
  }

  a {
    opacity: 0.85;
    color: #f4e25b;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
}

.contents::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.contents::-webkit-scrollbar-thumb {
  background: #41b883;
}
</style>
