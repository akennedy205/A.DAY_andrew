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
