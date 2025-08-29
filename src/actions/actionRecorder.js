let recordedActions = [];

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
    await saveRecord(action);
    console.log("Filled:", action);
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
    await saveRecord(action);
    console.log("Clicked:", target.id);
  } catch (error) {
    console.error("Error saving click action:", error);
  }
}
