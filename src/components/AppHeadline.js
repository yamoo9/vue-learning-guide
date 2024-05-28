import { ref, computed } from 'vue';
import vueImage from '../assets/vue.svg';

export default {
  template: /* html */ `
    <h1>
      <img v-if="showLogo" :src="logoImage" :height="logos.vue.size" alt="" />
      <b v-else>V</b>{{computedHeadline}}
    </h1>
  `,
  props: {
    headline: {
      type: String,
      required: true,
    },
    logos: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const computedHeadline = computed(() =>
      props.headline.replace(/javascript/i, 'ue')
    );

    const logoImage = ref(vueImage);
    const showLogo = ref(true);

    setTimeout(() => {
      showLogo.value = false;
    }, 1200);

    return {
      computedHeadline,
      logoImage,
      showLogo,
      logos: props.logos,
    };
  },
};
