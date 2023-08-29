const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, "-");

export default toSlug;
