import { computed } from 'vue';

export default {
  template: /* html */ `
    <p>{{computedDescription}}</p>
  `,
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const computedDescription = computed(() =>
      props.description.replace(/javascript/i, 'vue').toUpperCase()
    );

    return {
      computedDescription,
    };
  },
};
