function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("JoCo_DB", 2);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("pages")) {
        db.createObjectStore("pages", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = function (event) {
      resolve(event.target.result);
    };

    request.onerror = function (event) {
      reject("DB error: " + event.target.errorCode);
    };
  });
}

async function saveRecord(data) {
  try {
    const db = await openDB();
    const tx = db.transaction("pages", "readwrite");
    const store = tx.objectStore("pages");
    await store.add(data);
    await tx.complete;
    console.log("Record saved successfully:", data);
  } catch (error) {
    console.error("Error saving record:", error);
    throw error;
  }
}
