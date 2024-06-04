import { Ref, ref, toValue, watchEffect } from 'vue';

export default async function useFetch<T>(url: string | Ref<string>, options?: RequestInit) {
  const loading = ref<boolean>(false);
  const error = ref<null | Error>(null);
  const data = ref<null | T>(null);

  async function fetchData() {
    try {
      const response = await fetch(typeof url === 'string' ? url : toValue(url), options);
      const responseData = await response.json();
      data.value = responseData;
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  }

  watchEffect(() => {
    fetchData();
  });

  return { loading, error, data };
}
