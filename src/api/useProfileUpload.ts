import useFetch from '@/composables/useFetch';

const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;

export default async function useProfileUpload<T>(data: FormData | Blob | BinaryData) {
  return await useFetch<T>(url, {
    method: 'POST',
    body: data,
  });
}
