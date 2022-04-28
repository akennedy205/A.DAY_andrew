async function renderFeed() {
  const feed = document.createElement('section');
  feed.id = 'feed';
  const posts = await requestHabit();
  if (posts.err) {
    return;
  }
  const renderPost = (postData) => {
    const post = document.createElement('div');
    post.className = 'post';
    const user = document.createElement('h3');
    user.textContent = postData.habit;
    post.appendChild(user);
    feed.appendChild(post);
  };
  posts.forEach(renderPost);
  main.appendChild(feed);
}

// function renderProfile() {
//   const profile = document.createElement('section');
//   const greeting = document.createElement('h3');
//   greeting.textContent = `Hi ${localStorage.getItem('username')}!`;
//   profile.appendChild(greeting);
//   main.appendChild(profile);
// }

// function render404() {
//   const error = document.createElement('h2');
//   error.textContent = "Oops, we can't find that page sorry!";
//   main.appendChild(error);
// }
