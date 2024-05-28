import { computed } from 'vue';

export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const list = computed(() => props.list);
    return { list };
  },

  template: /* html */ `
    <nav class="navigation" lang="en">
      <slot name="heading"></slot>
      <ul>
        <template v-for="item in list" :key="item.id">
          <slot name="list" :item="item"></slot>
        </template>
      </ul>
    </nav>
  `,
};
