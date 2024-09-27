document.getElementById("scrapeProfiles").addEventListener("click", () => {
  const likeCount = document.getElementById("likeCount").value;
  const commentCount = document.getElementById("commentCount").value;

  if (likeCount && commentCount) {
    chrome.runtime.sendMessage({
      action: "startScraping",
      likeCount: parseInt(likeCount),
      commentCount: parseInt(commentCount)
    });
  } else {
    alert("Please enter both Like Count and Comment Count.");
  }
});


document.querySelectorAll("#likeCount, #commentCount").forEach(input => {
  input.addEventListener("input", () => {
    const likeCount = document.getElementById("likeCount").value;
    const commentCount = document.getElementById("commentCount").value;
    document.getElementById("scrapeProfiles").disabled = !(likeCount && commentCount);
  });
});
