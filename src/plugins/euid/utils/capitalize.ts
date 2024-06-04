const capitalize = (str: string) => {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .trim()
      .replace(/\s+(.)/g, ($1) => $1.toUpperCase())
  );
};

export default capitalize;
