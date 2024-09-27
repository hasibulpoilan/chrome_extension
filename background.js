chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startScraping") {
    const { likeCount, commentCount } = message;


    chrome.tabs.create({ url: "https://www.linkedin.com/feed/", active: true }, tab => {
      chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
        if (tabId === tab.id && info.status === 'complete') {

          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: likeAndCommentPosts,
            args: [likeCount, commentCount]
          });
          chrome.tabs.onUpdated.removeListener(listener);
        }
      });
    });
  }
});


function likeAndCommentPosts(likeCount, commentCount) {
  const posts = document.querySelectorAll(".occludable-update");
  let liked = 0;
  let commented = 0;

  posts.forEach(post => {

    if (liked < likeCount) {
      const likeButton = post.querySelector('[aria-label*="Like"]');
      if (likeButton) {
        likeButton.click();
        liked++;
      }
    }


    if (commented < commentCount) {
      const commentButton = post.querySelector('[aria-label*="Comment"]');
      if (commentButton) {
        commentButton.click();
        setTimeout(() => {
          const commentBox = post.querySelector('textarea');
          if (commentBox) {
            commentBox.value = "CFBR";
            const event = new Event('input', { bubbles: true });
            commentBox.dispatchEvent(event);
            const submitButton = post.querySelector('button[type="submit"]');
            if (submitButton) {
              submitButton.click();
              commented++;
            }
          }
        }, 2000);
      }
    }


    if (liked >= likeCount && commented >= commentCount) {
      return;
    }
  });


  alert(`Liked ${liked} posts and commented on ${commented} posts.`);
}
