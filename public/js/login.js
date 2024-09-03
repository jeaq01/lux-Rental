const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector('#signin-username').value.trim();
  const email = document.querySelector('#signin-email').value.trim();
  const password = document.querySelector('#signin-password').value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  // collecting values from sign-up form
  const name = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  // send POST request to API
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // if successful, go to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('#signup')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('#signin')
  .addEventListener('submit', loginFormHandler);
