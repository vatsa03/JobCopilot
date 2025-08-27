function generateUniqueSelector(el) {
  if (el.id) return `#${el.id}`;
  if (el.name) return `[name="${el.name}"]`;
  if (el.placeholder) return `[placeholder="${el.placeholder}"]`;
  if (el.type) return `input[type="${el.type}"]`;
  return path;
}
