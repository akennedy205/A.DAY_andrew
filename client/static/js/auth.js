// Toggle for Sign in and Sign up

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// LOGIN/REGISTER FUNCTIONS

const signIn = document.getElementById('SignIn');
const signUp = document.getElementById('SignUp');

signIn.addEventListener('submit', requestLogin);
signUp.addEventListener('submit', requestRegistration);

async function requestLogin(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    // console.log(Object.fromEntries(new FormData(e.target)));
    const r = await fetch(`http://localhost:3001/auth/login`, options);
    const data = await r.json();
    if (!data.success) {
      throw new Error('Login not authorised');
    }
    login(data.token);
    window.location.href = 'habitTracker.html';
  } catch (err) {
    console.warn(err);
  }
}

async function requestRegistration(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(`http://localhost:3001/auth/register`, options);
    const data = await r.json();
    // console.log(data);
    if (data.err) {
      throw Error(data.err);
    }
    window.location.hash = '#login';
  } catch (err) {
    console.warn(err);
  }
}

function login(token) {
  const user = jwt_decode(token);
  localStorage.setItem('token', token);
  localStorage.setItem('username', user.username);
  localStorage.setItem('userEmail', user.email);
  window.location.hash = '#feed';
}

function currentUser() {
  const username = localStorage.getItem('username');
  return username;
}
