<script setup lang="ts">
import vueLogo from '@/assets/vue.svg';
</script>

<template>
  <main class="animationDemo">
    <section class="sectionDemo">
      <h2>CSS 클래스 기반 애니메이션</h2>
      <div class="logos">
        <button type="button">
          <img :src="vueLogo" alt="Vue 로고" height="30" />
        </button>
        <button type="button">
          <img src="/vite.svg" alt="Vite 로고" height="30" />
        </button>
      </div>
    </section>
    <section class="sectionDemo">
      <h2>상태 기반 애니메이션</h2>
      <div ref="animateBoxRef" class="animateBox">
        <p>마우스를 움직여보세요.<br />{ x: 0 }</p>
      </div>
    </section>
    <section class="sectionDemo">
      <h2>워치 &amp; 애니메이션</h2>
      <div class="animateWatchController">
        <label for="animateWatch">
          <abbr title="Automated Teller Machine">ATM</abbr>
          무통장입금 한도
        </label>
        <div class="animateWatchInput">
          <input type="range" id="animateWatch" min="0" max="500" value="0" />
          <output>0</output>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.animationDemo {
  inline-size: 92vw;
  padding-inline-start: 40px;

  .sectionDemo {
    margin-block: 40px;
  }

  .logos {
    display: flex;
    flex-flow: column;
    align-items: start;
    gap: 20px;

    button {
      cursor: pointer;
      border: 0;
      border-radius: 4px;
      padding: 5px;
      background: transparent;

      &:hover:not(:disabled) {
        background: rgba(66, 75, 67, 0.3);
      }
    }
  }

  .animateBox {
    padding: 40px;
    background: hsl(153, 44%, 55%);
    color: #fff;
    transition: background 0.4s linear;

    p {
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.65);
    }
  }

  .animateWatchController {
    display: flex;
    flex-flow: column;
    align-items: start;
    gap: 10px;

    .animateWatchInput {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: start;

      input[type='range'] {
        cursor: pointer;
        -webkit-appearance: none;
        width: 160px;
        background-color: #282c35;
        height: 10px;
        border-radius: 10px;

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

      output {
        font-size: 24px;
        font-weight: 900;
        translate: 0 1px;
      }
    }
  }
}
</style>
