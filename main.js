let apiUser = "http://localhost:3000/user";
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");

// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Please enter your username and password");
  } else {
    const user = {
      username: username.value,
      password: password.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
});

// login
const usernameInput = document.querySelector(".input-login-username");
const passwordInput = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// Lưu thông tin đăng nhập vào localStorage
function saveLoginInfo(username) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
}

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (usernameInput.value == "" || passwordInput.value == "") {
    alert("Please enter your username and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.username == usernameInput.value && user.password == passwordInput.value
      );
      if (user) {
        alert("Login success");
        saveLoginInfo(user.username);

        // Redirect to index.html after successful login
        window.location.href = "index.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
