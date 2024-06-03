<script setup lang="ts">
import { reactive, ref } from 'vue';

const LECTURES = 'Vuex,Pinia,Nuxt.js,Vite,TypeScript,Tailwind CSS,Sass';

const list = reactive<{ id: number; text: string }[]>([
  {
    id: 1,
    text: 'Vue.js (1)',
  },
  {
    id: 2,
    text: 'Vue Router (2)',
  },
]);

const lectureContents = LECTURES.split(',');

const handleAddContent = () => {
  const index = Math.floor(Math.random() * lectureContents.length);
  const text = lectureContents[index];
  list.splice(Math.floor(Math.random() * list.length), 0, {
    id: list.length + 1,
    text: `${text} (${list.length + 1})`,
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
</script>

<template>
  <form class="searchForm">
    <label for="search">Search</label>
    <input type="search" id="search" v-model="searchTerm" />
  </form>
  <div class="buttonGroup" role="group">
    <button type="button" class="button" v-capitalize @click="handleAddContent">add</button>
    <button type="button" class="button" v-capitalize @click="handleRemoveContent">remove</button>
    <button type="button" class="button" v-capitalize @click="handleShuffleContent">shuffle</button>
  </div>
  <TransitionGroup name="lecture-list" tag="ul" class="list">
    <li v-for="item in list" :key="item.id">
      {{ item.text }}
    </li>
  </TransitionGroup>
</template>

<style>
.searchForm {
  margin-block-start: 100px;

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
</style>
