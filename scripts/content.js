chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startLikingCommenting') {
    const { likeCount, commentCount } = request;


    window.location.href = 'https://www.linkedin.com/feed/';


    window.addEventListener('load', () => {

      function likePosts(count) {
        const posts = document.querySelectorAll('.react-button');
        const selectedPosts = [...posts].sort(() => 0.5 - Math.random()).slice(0, count);

        selectedPosts.forEach((post) => {
          post.click();
        });
      }


      function commentOnPosts(count) {
        const commentButtons = document.querySelectorAll('.comment-button');
        const selectedComments = [...commentButtons].sort(() => 0.5 - Math.random()).slice(0, count);

        selectedComments.forEach((button, index) => {
          button.click();
          setTimeout(() => {
            const commentBox = document.querySelector('.comment-box');
            if (commentBox) {
              commentBox.value = 'CFBR';
              const postButton = commentBox.closest('.comment-form').querySelector('.post-comment-button');
              if (postButton) {
                postButton.click();
              }
            } else {
              console.error("Comment box not found");
            }
          }, index * 2000);
        });
      }


      likePosts(likeCount);
      commentOnPosts(commentCount);
    });
  }
});
