import { ref } from 'vue';
import Navigation from './components/AppNavigation';
import ComponentFundamentals from './views/ComponentFundamentals';
import RegisterForm from './views/RegisterForm';

export default {
  components: {
    Navigation,
    ComponentFundamentals,
    RegisterForm,
  },
  setup() {
    const navigationList = ref([
      {
        id: 1,
        href: '/component',
        viewMode: 'component',
      },
      {
        id: 2,
        href: '/form',
        viewMode: 'form',
      },
    ]);

    const renderView = ref('component');

    const assignActiveClass = (mode) => {
      return renderView.value.includes(mode) ? 'active' : '';
    };

    const changeRenderView = (viewMode) => {
      renderView.value = viewMode;
    };

    const handleChangeRenderView = (viewMode) => {
      changeRenderView(viewMode);
    };

    return {
      navigationList,
      renderView,
      assignActiveClass,
      changeRenderView,
      handleChangeRenderView,
    };
  },
  template: /* html */ `
    <Navigation :list="navigationList">
      <template #heading>
        <h2 class="sr-only">글로벌 내비게이션 바</h2>
      </template>
      <template #list="{item}">
        <li>
          <a :href="item.href" :class="assignActiveClass(item.viewMode)" @click.prevent="changeRenderView(item.viewMode)">{{item.viewMode}}</a>
        </li>
      </template>
    </Navigation>
    <ComponentFundamentals v-if="renderView === 'component'"></ComponentFundamentals>
    <RegisterForm v-if="renderView === 'form'" @changeRenderView="handleChangeRenderView"></RegisterForm>
  `,
};
