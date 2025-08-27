let recordedActions = [];

function recordFillAction(target) {
  const action = {
    type: "fill",
    selector: generateUniqueSelector(target),
    value: target.value,
    timestamp: Date.now(),
  };
  recordedActions.push(action);
  console.log("Filled:", action);
}

function recordClickAction(target) {
  const action = {
    type: "click",
    selector: generateUniqueSelector(target),
    checked: target.checked !== undefined ? target.checked : null,
    timestamp: Date.now(),
  };
  recordedActions.push(action);
  console.log("Clicked:", target.id);
}
