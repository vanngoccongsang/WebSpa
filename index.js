document.addEventListener("DOMContentLoaded", function () {
    // Lấy thông tin đăng nhập từ localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");
  
    // Nếu đăng nhập thành công, hiển thị tên người dùng
    if (isLoggedIn === "true" && username) {
      document.getElementById("userGreeting").innerText = `Chào mừng, ${username}!`;
    }
  });
  