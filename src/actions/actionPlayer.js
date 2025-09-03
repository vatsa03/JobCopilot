async function readFromIndexedDB(dbName, storeName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onerror = () => reject("Error opening DB");

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject("Error reading data");
    };
  });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function replayActions() {
  result = await chrome.storage.local.get(["actions"]);
  console.log("Storage result:", result);
  const data = result.actions?.uber?.page_1 || [];
  console.log("Stored actions data:", data);

  for (const action of data) {
    await sleep(500);
    const el = document.querySelector(action.selector);
    if (!el) continue;

    if (action.type === "fill") {
      el.value = action.value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (action.type === "click") {
      if (action.checked !== null) {
        el.checked = action.checked;
        el.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        el.click();
      }
    }
  }
}
