import { computed } from 'vue';

export default {
  template: /* html */ `
    <button type="button" class="button" @click="handleIncrease">
      {{count}}
    </button>
  `,
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['increase'],
  setup(props, { emit }) {
    const count = computed(() => props.count);
    const handleIncrease = () => emit('increase');

    return {
      count,
      handleIncrease,
    };
  },
};
