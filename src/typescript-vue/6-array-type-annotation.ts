// ------------------------------------------------------------------
// 어레이 타입 애너테이션 (Array Type Annotation, 배열 유형 주석)
// ------------------------------------------------------------------

{
  const numberTypedArray = [10, 101, 201, 301];

  let total = numberTypedArray.reduce((total, value) => value + total, 0);
  console.log(total);

  const stringTypedArray = 'annotation, inference, type alias'.split(',');
  console.log(stringTypedArray.length);
}

{
  const objectToIterator = [
    ['name', '황수진'],
    ['gender', '여성'],
    ['job', '디자이너'],
  ];

  console.log(Object.fromEntries(objectToIterator));

  const numbers = [[[101, 201]], [[301]], [[401, 501]]];

  console.log(numbers[0][0][1]);
}
