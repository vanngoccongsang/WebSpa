const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

document.addEventListener("DOMContentLoaded", function () {
  const toBottomButton = document.querySelector(".to-bottom a");
  const servicesSection = document.getElementById("services-section");

  toBottomButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Cuộn đến phần sản phẩm
      servicesSection.scrollIntoView({
          behavior: "smooth"
      });
  });
});

//cuộn lên trang đầu
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  }

  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});

 // Kiểm tra xem local storage có chứa username là "admin" hay không
 var usernameInLocalStorage = localStorage.getItem('username');

 if (usernameInLocalStorage === 'admin') {
     // Nếu có, hiển thị phần tử div
     document.getElementById('adminLink').style.display = 'block';
 }

