function init() {
  createApplyButton();
}

init();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startRecording") {
    console.log("Recording started...");
    setupEventListeners();
  }
});
