document.addEventListener("click", (event) => {
  if (bargarMenu.contains(event.target)) {
    dropMenu.style.height = "300px";
  } else if (!dropMenu.contains(event.target)) {
    dropMenu.style.height = "0%";
  }
});

// document.querySelector("#email_sub_btn").addEventListener("click", (event) => {
//   document.querySelector("#email_sub_btn").style.background = "red";
// });
//background image slide show//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("imageSlider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
