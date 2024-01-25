function slugifyString(string: string): string {
  return string
    .normalize("NFD").replace(/([\u0300-\u036f]|[^\s0-9a-zA-Z])/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

export { slugifyString };
