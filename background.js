chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrapeProfiles") {
    const urls = request.urls;
    urls.forEach(url => {
      chrome.tabs.create({ url: url.trim() });
    });
  }
});
