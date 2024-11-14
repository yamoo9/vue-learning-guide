import {
  createApp,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js';

import './styles/globals.css';

const vueApp = createApp({
  setup() {
    const mails = reactive([]);
    watchEffect(async () => {
      if (mails.length === 0) {
        const { default: data } = await import('./data/mails.json');
        data.forEach((item) => mails.push(item));
      }
    });

    const reverseSortedMails = computed(() => mails.toReversed());

    const allChecked = ref(false);
    const handleAllChecked = (e) => {
      mails.forEach((mail) => (mail.checked = e.target.checked));
    };

    const totalCheckedCount = computed(() =>
      mails.reduce((total, mail) => total + (mail.checked ? 1 : 0), 0)
    );
    watch(totalCheckedCount, (count) => {
      if (count === mails.length) {
        allChecked.value = true;
      } else {
        allChecked.value = false;
      }
    });

    const totalReadCount = computed(() =>
      mails.reduce((total, mail) => total + (mail.read ? 1 : 0), 0)
    );

    return {
      mails,
      reverseSortedMails,
      allChecked,
      totalCheckedCount,
      totalReadCount,
      handleAllChecked,
    };
  },

  template: /* html */ `
    <table class="emailTable">
      <caption class="sr-only">이메일 앱 테이블</caption>
      <thead>
        <tr>
          <th scope="col">
            <input
              type="checkbox"
              id="allSelect"
              title="모두 선택"
              v-model="allChecked" 
              @input="handleAllChecked" 
            />
            <label for="allSelect" class="sr-only">모두 선택</label>
          </th>
          <th scope="col">읽음</th>
          <th scope="col">제목</th>
          <th scope="col">날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="mail in reverseSortedMails" 
          :key="mail.id" 
        >
          <td>
            <input 
              type="checkbox"
              v-model="mail.checked"
              :aria-label="mail.title" 
              :title="mail.checked ? '선택 해제' : '선택'" 
            />
          </td>
          <td>
            <button
              type="button" 
              @click="mail.read = !mail.read" 
              :aria-label="'메일 ' + (mail.read ? '읽음' : '읽지 않음')" 
              :title="'메일 ' + (mail.read ? '읽음' : '읽지 않음')"
            >
              <svg v-if="!mail.read" height="20" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
              </svg>
              <svg v-else height="20" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"></path>
              </svg>
            </button>
          </td>
          <td>
            <a href="#empty" @click.prevent>{{mail.title}}</a>
          </td>
          <td>
            {{mail.sendDate}}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            선택된 메일의 총 갯수는 <b>{{totalCheckedCount}}</b>개, 읽은 메일의 총 갯수는 <b>{{totalReadCount}}</b>개입니다.
          </td>
        </tr>
      </tfoot>
    </table>
  `,
});

globalThis.vm = vueApp.mount('#app');
