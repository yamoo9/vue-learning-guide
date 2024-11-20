<script setup lang="ts">
// 1. 컴포넌트 속성(props) 설정
const id = '컴포넌트 속성 id 값';

// 2. 샘플 또는 사용자 업로드 이미지 설정을 위한 상태 설정
const previewImage = '샘플 프로필 이미지 경로';

// 3. 이미지 파일 선택 시, 변경(change) 업데이트 함수 설정
const handleChange = () => {

  // 4. 이미지 파일 선택 시, 이미지 썸네일 표시 설정

};

// 5. 상위 컴포넌트에 <input /> 요소 노출(expose) 설정

</script>

<template>
  <div class="formControl profileUpload">
    <label :for="id">프로필 이미지</label>
    <input
      ref="inputRef"
      type="file"
      :id="id"
      accept="image/jpg, image/jpeg, image/png, image/webp"
      @change="handleChange"
    />
    <img :src="previewImage" alt="" class="profileImage" />
  </div>
</template>

<style>
.profileUpload {
  --size: 60px;
  --radius: 50%;
  --color: #58be90;

  position: relative;

  &:focus-within img {
    outline: 4px solid color-mix(in srgb, var(--color) 50%, #111 30%);
  }

  label {
    margin-block-end: 6px;
  }

  input[type='file'] {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    inline-size: var(--size);
    border-radius: var(--radius);
    block-size: var(--size);
    opacity: 0;
  }
}

.profileImage {
  inline-size: var(--size);
  block-size: var(--size);
  border-radius: var(--radius);
  background: var(--color);
  object-fit: cover;
}
</style>
