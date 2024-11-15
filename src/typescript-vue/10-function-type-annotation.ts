// ------------------------------------------------------------------
// 펑션 타입 애너테이션 (Function Type Annotation, 함수 유형 주석)
// ------------------------------------------------------------------

{
  const convertNumberToCurrency = (num) => {
    let currency = '';
    const stringNum = num.toString();

    for (let i = stringNum.length - 1, stringN; (stringN = stringNum[i]); --i) {
      let separator = '';
      const stringN = stringNum[i];
      if (i > 0 && (i + 1) % 3 === 0) separator = ',';
      currency = currency + stringN + separator;
    }

    return [...currency].reverse().join('').replace(/^,/, '');
  };

  console.log(convertNumberToCurrency(81320));
}
