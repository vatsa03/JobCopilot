document.getElementById("recordButton").addEventListener("click", () => {
  console.log("Recording started...");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "startRecording" });
  });
});
