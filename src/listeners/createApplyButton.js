function createApplyButton() {
  const button = document.createElement("button");
  button.innerText = "Apply with JoCo";
  button.id = "job-apply-btn";

  button.onclick = () => {
    console.log("Filling application form...");
    //replayActions(recordedActions);
    console.log("Application form filled.");
  };

  document.body.appendChild(button);
}
