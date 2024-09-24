document.getElementById("scrapeProfiles").addEventListener("click", () => {

  const profileUrlsInput = "https://www.linkedin.com/in/satyanadella/,https://www.linkedin.com/in/hasibul-pailan-313906284/, https://www.linkedin.com/in/satyanadella/";


  const profileUrls = profileUrlsInput.split(',').map(url => url.trim()).filter(url => url);


  if (profileUrls.length < 3) {
    alert("Please enter at least 3 LinkedIn profile URLs.");
    return;
  }


  chrome.runtime.sendMessage({ action: "scrapeProfiles", urls: profileUrls });

  alert("LinkedIn profiles will be opened in new tabs.");
});
