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
