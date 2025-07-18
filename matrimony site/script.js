const userForm = document.getElementById('userForm');
const formTitle = document.getElementById('formTitle');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const toggleText = document.getElementById('toggleText');
const toggleLink = document.getElementById('toggleLink');
const outputMessage = document.getElementById('outputMessage');

let isLogin = true; // Current mode

// Toggle between login and registration
toggleLink.addEventListener('click', function (e) {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = 'Login';
    emailInput.style.display = 'none';
    submitBtn.textContent = 'Login';
    toggleText.innerHTML = `Don't have an account? <a href="#" id="toggleLink">Register here</a>`;
  } else {
    formTitle.textContent = 'Register';
    emailInput.style.display = 'block';
    submitBtn.textContent = 'Register';
    toggleText.innerHTML = `Already have an account? <a href="#" id="toggleLink">Login here</a>`;
  }

  outputMessage.textContent = '';
});

// Handle form submission
userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const email = emailInput.value.trim();

  if (isLogin) {
    const userData = localStorage.getItem(username);
    if (!userData) {
      outputMessage.style.color = 'red';
      outputMessage.textContent = "User not found!";
    } else {
      const user = JSON.parse(userData);
      if (user.password === password) {
        outputMessage.style.color = 'green';
        outputMessage.textContent = `Login successful! Welcome ${username}.`;
      } else {
        outputMessage.style.color = 'red';
        outputMessage.textContent = "Incorrect password!";
      }
    }
  } else {
    if (localStorage.getItem(username)) {
      outputMessage.style.color = 'red';
      outputMessage.textContent = "Username already exists!";
    } else {
      const newUser = {
        email: email,
        password: password
      };
      localStorage.setItem(username, JSON.stringify(newUser));
      outputMessage.style.color = 'green';
      outputMessage.textContent = "Registration successful! You can now log in.";
    }
  }

  userForm.reset();
});

