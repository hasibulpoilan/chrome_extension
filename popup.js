document.getElementById('fetch-title').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const title = currentTab.title;
      document.getElementById('title-display').textContent = `Tab Title: ${title}`;
    });
  });
  