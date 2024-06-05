<script setup lang="ts">
import vueLogo from '@/assets/vue.svg';
import { reactive, ref, watch, useCssModule } from 'vue';
import gsap from 'gsap';

const S = useCssModule();

const move = ref<boolean>(false);
const rotate = ref<boolean>(false);

const x = ref<number>(0);

const animateBoxRef = ref<null | HTMLDivElement>(null);

const handleMove = (e: MouseEvent) => {
  x.value = Number(e.offsetX.toFixed(0));
};

watch(x, (value) => {
  const animateBox = animateBoxRef.value;
  if (animateBox) {
    const { width } = animateBox.getBoundingClientRect() as DOMRect;
    const hueValue = ((value / width) * 360).toFixed(0);
    animateBox.style.backgroundColor = `hsl(${hueValue}, 80%, 50%)`;
  }
});

const depositLimit = ref<number>(0);
const deposit = reactive<{ limit: number }>({ limit: 0 });

watch(depositLimit, (value) => {
  gsap.to(deposit, { limit: value, duration: 0.45 });
});
</script>

<template>
  <main :class="S.animationDemo">
    <section :class="S.sectionDemo">
      <h2>CSS 클래스 기반 애니메이션</h2>
      <div :class="S.logos">
        <button type="button" :class="{ [S.animateWiggle]: move }" @click="move = !move">
          <img :src="vueLogo" alt="Vue 로고" height="30" />
        </button>
        <button type="button" :class="{ [S.animatePulse]: rotate }" @click="rotate = !rotate">
          <img src="/vite.svg" alt="Vite 로고" height="30" />
        </button>
      </div>
    </section>
    <section :class="S.sectionDemo">
      <h2>상태 기반 애니메이션</h2>
      <div ref="animateBoxRef" :class="S.animateBox" @pointermove="handleMove">
        <p>마우스를 움직여보세요.<br />{ x: {{ x }} }</p>
      </div>
    </section>
    <section :class="S.sectionDemo">
      <h2>워치 &amp; 애니메이션</h2>
      <div :class="S.animateWatchController">
        <label for="animateWatch">
          <abbr title="Automated Teller Machine">ATM</abbr>
          무통장입금 한도
        </label>
        <div :class="S.animateWatchInput">
          <input type="range" id="animateWatch" min="0" max="500" v-model="depositLimit" />
          <output>{{ deposit.limit.toFixed(0) }}</output>
        </div>
      </div>
    </section>
  </main>
</template>

<style module>
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

      &.from {
        transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &.moveX {
        translate: 400px 0;
      }

      &.rotate1R {
        rotate: 360deg;
      }

      &.animateWiggle {
        animation: wiggle 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      }

      &.animatePulse {
        animation: pulse 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
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

@keyframes wiggle {
  0%,
  100% {
    translate: 0 0;
  }
  10%,
  50%,
  90% {
    translate: -10px 3px;
  }
  20%,
  40%,
  60%,
  80% {
    translate: 10px 10px;
  }
  30%,
  70% {
    translate: 10px 2px;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
