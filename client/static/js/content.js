async function renderFeed() {
  const feed = document.getElementById("habitContent");
    feed.style.display = "block";
    const post = document.createElement("div");
    post.className = "card";
    const card = document.createElement("div");
    card.className = "card-body";
  async function renderPost() {
    card.textContent = await requestHabit;
    post.appendChild(card);
    feed.appendChild(post);
  }

  post.forEach(renderPost());
  body.appendChild(feed);

  // feed.id = "feed";
  // const posts = await requestHabit();
  // if (posts.err) {
  //   console.log(posts.err)
  //   return;
  // }
  // const renderPost = (requestHabit) => {
  //   const post = document.createElement("div");
  //   post.className = "card";
  //   const card = document.createElement("div");
  //   card.className = "card-body";
  //   const user = document.createElement('h3');
  //   card.textContent = requestHabit.habit;
  //   post.appendChild(card);
  //   feed.appendChild(post);
  // };
  // posts.forEach(renderPost);
  // body.appendChild(feed);
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
