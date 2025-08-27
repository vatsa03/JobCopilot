function setupEventListeners() {
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT"
    ) {
      recordFillAction(target);
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.id === "job-apply-btn") return;
    if (
      target.tagName === "BUTTON" ||
      target.type === "submit" ||
      target.type === "checkbox" ||
      target.type === "radio"
    ) {
      recordClickAction(target);
    }
  });
}
