<script setup lang="ts">
import gsap from 'gsap';
import { computed, reactive, ref } from 'vue';

const LECTURES = 'Vuex,Pinia,Nuxt.js,Vite,TypeScript,Tailwind CSS,Sass';

const list = reactive([
  {
    id: crypto.randomUUID(),
    text: 'Vue.js (1)',
  },
  {
    id: crypto.randomUUID(),
    text: 'Vue Router (2)',
  },
]);

let newIndex = list.length;

const lectureContents = LECTURES.split(',');

const handleAddContent = () => {
  const index = Math.floor(Math.random() * lectureContents.length);
  const text = lectureContents[index];
  list.splice(Math.floor(Math.random() * list.length), 0, {
    id: crypto.randomUUID(),
    text: `${text} (${(newIndex += 1)})`,
  });
};

const handleRemoveContent = () => {
  if (list.length > 0) {
    list.splice(Math.floor(Math.random() * list.length), 1);
  }
};

const handleShuffleContent = () => {
  if (list.length > 0) {
    list.sort(() => Math.random() - 0.5);
  }
};

const searchTerm = ref<string>('');

const searchedList = computed(() => {
  const term = searchTerm.value;

  return term.trim().length === 0
    ? list
    : list.filter((item) => {
        const reg = new RegExp(term, 'i');
        return reg.test(item.text);
      });
});

function handleBeforeEnter(el: HTMLElement) {
  gsap.set(el, { opacity: 0, height: 0, padding: 0 });
}

function handleEnter(el: HTMLElement, done: () => void) {
  const index = Number(el.dataset.index);

  if (index) {
    gsap.to(el, {
      opacity: 1,
      height: '1.6em',
      padding: '4px 0',
      duration: 0.2,
      delay: index * 0.15,
      onComplete: done,
    });
  }
}

function handleLeave(el: HTMLElement, done: () => void) {
  const index = Number(el.dataset.index);

  if (index) {
    gsap.to(el, {
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 0.2,
      delay: index * 0.15,
      onComplete: done,
    });
  }
}
</script>

<template>
  <form class="searchForm" @submit.prevent>
    <label for="search">Search</label>
    <input type="search" id="search" v-model="searchTerm" />
  </form>
  <div class="buttonGroup" role="group">
    <button type="button" class="button" v-capitalize @click="handleAddContent">
      add
    </button>
    <button
      type="button"
      class="button"
      v-capitalize
      @click="handleRemoveContent"
    >
      remove
    </button>
    <button
      type="button"
      class="button"
      v-capitalize
      @click="handleShuffleContent"
    >
      shuffle
    </button>
  </div>
  <TransitionGroup
    name="lecture-list"
    tag="ul"
    class="list"
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"
    @leave="handleLeave"
  >
    <li
      v-for="(item, index) in searchedList"
      :key="item.id"
      :data-index="index + 1"
    >
      {{ item.text }}
    </li>
  </TransitionGroup>
</template>

<style>
.searchForm {
  margin-block-start: 100px;
  margin-inline: 80px;

  display: flex;
  align-items: center;
  gap: 12px;

  label {
    text-transform: uppercase;
    font-size: 18px;
    translate: 0 1px;
  }

  input {
    background: none;
    border: 2px solid #41b883;
    border-radius: 4px;
    padding: 4px 8px;
    color: #41b883;
  }
}

.buttonGroup {
  display: flex;
  gap: 8px;
  margin-block-start: 20px;

  .button {
    font-size: 12px;
    padding-inline: 18px;
  }
}

.list {
  inline-size: 180px;
  block-size: 90vh;

  li {
    padding-block: 4px;
  }
}

.lecture-list-move {
  transition: all 0.5s;
}

.lecture-list-leave-active {
  position: absolute;
}
</style>
