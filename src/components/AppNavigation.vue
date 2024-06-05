<script setup lang="ts">
import type { IRoute } from '@/routes';

interface Props {
  list: IRoute[];
  currentPath: string;
}

const { list, currentPath } = defineProps<Props>();

const relacePathToContent = (path: string) => {
  const content = path.replace(/\/|-/g, ($1: string) => {
    if ($1 === '/') return '';
    if ($1 === '-') return ' ';
    return $1;
  });

  return content ? content : 'home';
};
</script>

<template>
  <nav class="navigation" lang="en">
    <h2 class="sr-only">글로벌 내비게이션 바</h2>
    <ul>
      <template v-for="item in list" :key="item.path">
        <li>
          <a
            :href="`#${item.path}`"
            :class="{ active: `#${item.path}` === currentPath }"
            v-capitalize
          >
            {{ relacePathToContent(item.path) }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #41b883;
  color: #fffb;

  ul {
    list-style: none;
    padding: 0 20px;
    display: flex;
    gap: 4px;

    a {
      padding: 8px 20px;
      color: inherit;
      text-decoration: none;
      border-radius: 20px;

      &:hover {
        color: #fff;
      }

      &.active {
        background: #0c362346;
        color: #fff;
      }
    }
  }
}
</style>
