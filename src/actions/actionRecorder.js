function sync_to_storage(action) {
  chrome.storage.local.get(["actions"], function (result) {
    let actions = result.actions || {};
    if (!actions["uber"]) {
      actions["uber"] = {};
    }
    if (!actions["uber"]["page_1"]) {
      actions["uber"]["page_1"] = [];
    }

    actions["uber"]["page_1"].push(action);
    chrome.storage.local.set({ actions: actions }, function () {});
  });
}

async function recordFillAction(target) {
  const action = {
    type: "fill",
    selector: generateUniqueSelector(target),
    page_number: 1,
    website: "uber",
    value: target.value,
    timestamp: Date.now(),
  };
  recordedActions.push(action);
  try {
    sync_to_storage(action);
  } catch (error) {
    console.error("Error saving fill action:", error);
  }
}

async function recordClickAction(target) {
  const action = {
    type: "click",
    selector: generateUniqueSelector(target),
    checked: target.checked !== undefined ? target.checked : null,
    timestamp: Date.now(),
  };
  recordedActions.push(action);
  try {
    sync_to_storage(action);
  } catch (error) {
    console.error("Error saving click action:", error);
  }
}
