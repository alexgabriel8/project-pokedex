function slugifyString(rawString: string) {
  let processedString = rawString.trim();
  processedString = processedString.toLowerCase();
  processedString = processedString
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^\s0-9a-zA-Z\-])/g, "");

  return processedString.replace(/ /g, "-");
}

export { slugifyString };
