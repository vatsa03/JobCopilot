function generateUniqueSelector(el) {
  if (!(el instanceof Element)) return null;

  if (el.id) return `#${el.id}`;
  if (el.name) return `[name="${el.name}"]`;
  if (el.placeholder) return `[placeholder="${el.placeholder}"]`;
  if (el.type) return `${el.tagName.toLowerCase()}[type="${el.type}"]`;

  let path = [];
  while (el && el.nodeType === Node.ELEMENT_NODE) {
    let selector = el.nodeName.toLowerCase();

    // Prefer stable attributes
    if (el.name) {
      selector += `[name="${el.name}"]`;
    } else if (el.placeholder) {
      selector += `[placeholder="${el.placeholder}"]`;
    } else if (el.type) {
      selector += `[type="${el.type}"]`;
    }

    // Handle siblings with same tag
    let siblingIndex = 1;
    let sibling = el;
    while ((sibling = sibling.previousElementSibling) !== null) {
      if (sibling.nodeName.toLowerCase() === el.nodeName.toLowerCase()) {
        siblingIndex++;
      }
    }
    if (siblingIndex > 1) {
      selector += `:nth-of-type(${siblingIndex})`;
    }

    path.unshift(selector);

    if (el.id) break; // stop if parent has an ID

    el = el.parentNode;
  }

  return path.join(" > ");
}
