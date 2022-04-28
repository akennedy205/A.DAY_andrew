async function getAllInfo() {
  try {
    const options = {
      headers: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    // NEED TO FETCH THE INFORMATION NEEDED FOR THE HABITS ADD AND TRACKING INFO //
    const response = await fetch("http://localhost:3001/habits", options);
    const data = await response.json();
    if (data.err) {
      console.warn(data.err);
      logout();
    }
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function requestHabit(e) {
  e.preventDefault();
  try {
    const content = document.getElementById("habitContent").value;
    const payload = {
      username: localStorage.getItem("username"),
      habit: content,
    };
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch("http://localhost:3001/habits", options);

    const r = await fetch(
      `http://localhost:3001/habits/${localStorage.getItem("username")}`
    );
    const data = await r.json();
    console.log(data);
    // if (data.status === ) {
    //   throw new Error("Habit is not valid");
    // }
    // window.location.href = 'habitTracker.html';
    renderFeed();
  } catch (err) {
    console.warn(err);
  }
}

const habitBtn = document.getElementById("habitBtn");
habitBtn.addEventListener("click", (e) => {
  console.log(e);
  requestHabit(e);
});

//  Add Habit function

// const form = document.querySelector('form');
// form.addEventListener('submit', postHabit);

// async function postHabit(e) {
//   e.preventDefault();
//   try {
//     const options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
//     };
//     const r = await fetch(`http://localhost:3001/${usrname}`, options);
//     const data = await r.json();
//     console.log(data);
//     if (data.err) {
//       throw Error(data.err);
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// }

// async function getHabit(username) {
//   try {
//     const response = await fetch(`http://localhost:3001/${username}`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.warn(err);
//   }
// }

// const r = await fetch(`http://localhost:3001/${username}`, options);

// async function postHabit(e) {
//   e.preventDefault();
//   try {
//     const options = {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.parse(Object.fromEntries(new FormData(e.target))),
//     };
//     const r = await fetch(`http://localhost:3001/habits`, options);
//     const data = await r.json();
//     console.log(data);
//     if (data.err) {
//       throw Error(data.err);
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// }

// fetch("http://localhost:3001/users/:id", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   habits: JSON.stringify({
//     name: 'pushing p'
//   })
// }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))
