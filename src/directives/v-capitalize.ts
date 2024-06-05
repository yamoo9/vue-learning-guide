const vCapitalize = (el: HTMLElement) => {
  const capitalizeText = el.textContent!.replace(/^\w{1}|\s+\w{1}/g, ($1) => $1.toUpperCase());
  el.textContent = capitalizeText;
};

export default vCapitalize;
