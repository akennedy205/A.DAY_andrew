// async function renderFeed() {
//   const feed = document.createElement("section");
//   feed.id = "feed";
//   const posts = await getAllInfo();
//   if (posts.err) {
//     return;
//   }
//   const renderPost = (postData) => {
//     const post = document.createElement("div");
//     post.className = "post";
//     const user = document.createElement("h3");
//     const body = document.createElement("p");
//     user.textContent = postData.username;
//     body.textContent = postData.body;
//     post.appendChild(user);
//     post.appendChild(body);
//     feed.appendChild(post);
//   };
//   posts.forEach(renderPost);
//   main.appendChild(feed);
// }

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
