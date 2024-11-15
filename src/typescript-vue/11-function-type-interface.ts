// ------------------------------------------------------------------
// 펑션 타입 | 인터페이스 (Function Type or Interface, 함수 타입 | 인터페이스)
// ------------------------------------------------------------------

{
  // CurrencyFn 타입 또는 인터페이스를 정의

  const convertNumberToCurrency = (num: number): string => {
    let currency = '';
    const stringNum = num.toString();

    for (let i = stringNum.length - 1, stringN; (stringN = stringNum[i]); --i) {
      let separator = '';
      if (i > 0 && (i + 1) % 3 === 0) separator = ',';
      currency = currency + stringN + separator;
    }

    return [...currency].reverse().join('').replace(/^,/, '');
  };

  console.log(convertNumberToCurrency(81320));

  // ------------------------------------------------------------------

  const numberWithComma = (n: number): string => {
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  console.log(numberWithComma(27900));
}
