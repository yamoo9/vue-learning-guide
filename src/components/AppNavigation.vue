<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  list: INavigationItem[];
  renderView: RenderView;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'changeRenderView', viewMode: RenderView): void;
}

const emit = defineEmits<Emits>();

const list = computed(() => props.list);

const assignActiveClass = (mode: RenderView) => {
  return props.renderView === mode ? 'active' : '';
};

const handleChange = (viewMode: RenderView) => {
  emit('changeRenderView', viewMode);
};
</script>

<template>
  <nav class="navigation" lang="en">
    <h2 class="sr-only">글로벌 내비게이션 바</h2>
    <ul>
      <template v-for="item in list" :key="item.id">
        <li>
          <a
            :href="item.href"
            :class="assignActiveClass(item.viewMode)"
            @click.prevent="handleChange(item.viewMode)"
            v-capitalize
          >
            {{ item.viewMode }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style>
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
