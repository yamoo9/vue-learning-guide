import { ref } from 'vue';

import jsonData from '../data/dummy.json';
import AppDescription from '../components/AppDescription';
import AppHeadline from '../components/AppHeadline';
import AppButton from '../components/AppButton';

export default {
  components: {
    AppHeadline,
    AppDescription,
    AppButton,
  },
  setup() {
    const { headline, description, logos } = jsonData;
    const subjects = [
      'Vue 라이브러리',
      'Vue Router 라이브러리',
      'Pinia 라이브러리',
    ];

    const count = ref(0);
    const handleIncrease = () => {
      count.value++;
    };

    return {
      headline,
      description,
      logos,
      subjects,
      count,
      handleIncrease,
    };
  },
  template: /* html */ `
    <AppHeadline :headline="headline" :logos="logos"></AppHeadline>
    <AppDescription :description="description"></AppDescription>
    <AppButton :count="count" @increase="handleIncrease">{{count}}</AppButton>
  `,
};
