// ------------------------------------------------------------------
// 제네릭 (Generic, 포괄적, 공용)
// ------------------------------------------------------------------

{
  // 제네릭을 포함하는 타입 또는 인터페이스 정의

  const makeStringArray = (...args: unknown[]): string[] => {
    return args.map((item) => String(item));
  };

  makeStringArray(10, null, undefined, [], 'array');

  // -----------------------------------------------------------------

  const makeBooleanArray = (...args: unknown[]): boolean[] => {
    return args.map((item) => Boolean(item));
  };

  makeBooleanArray(10, null, undefined, [], 'array');

  // -----------------------------------------------------------------

  const makeNumberArray = (...args: unknown[]): number[] => {
    return args.map((item) => {
      let value = Number(item);
      return Number.isNaN(value) ? 0 : value;
    });
  };

  makeNumberArray(10, null, undefined, [], 'array');
}
