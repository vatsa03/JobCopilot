function createApplyButton() {
  const button = document.createElement("button");
  button.innerText = "Apply with JoCo";
  button.id = "job-apply-btn";

  button.onclick = () => {
    replayActions();
  };

  document.body.appendChild(button);
}
