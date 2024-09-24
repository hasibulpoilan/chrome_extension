(function () {

  window.onload = () => {
    try {
      const name = document.querySelector(".pv-top-card .text-heading-xlarge").innerText;
      const location = document.querySelector(".pv-top-card .text-body-small").innerText;
      const about = document.querySelector(".pv-about-section").innerText;
      const bio = document.querySelector(".text-body-medium").innerText;
      const followerCount = parseInt(document.querySelector(".follower-count").innerText.replace(/\D/g, ''));
      const connectionCount = parseInt(document.querySelector(".t-16.t-black.t-bold").innerText.replace(/\D/g, ''));


      fetch('http://localhost:8080/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          location,
          about,
          bio,
          follower_count: followerCount || 0,
          connection_count: connectionCount || 0,
          url: window.location.href
        })
      }).then(response => console.log("Profile data posted!"))
        .catch(error => console.error("Error posting profile data:", error));
    } catch (error) {
      console.error("Error scraping profile data:", error);
    }
  };
})();
