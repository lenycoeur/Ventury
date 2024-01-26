
/*----- ANIM PROGRESSBAR ------*/
function updateProgressBar() {
    const container = document.querySelector(".horizontal-scroll");
    const progressBar = document.getElementById("progress");
  
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
  
    const progress = (scrollLeft / scrollWidth) * 100;
    progressBar.style.width = `${progress}%`;
  }

  document.body.onload = function() {
    updateProgressBar();
  };
  
/*----- Anim NAV SCROLL -----*/
document.addEventListener('DOMContentLoaded' , function () {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            nav.classList.add('anim-nav');
        } else {
            nav.classList.remove('anim-nav');
        }
     });
} );

/* ------- LOGIN ------*/

document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedFormData = JSON.parse(localStorage.getItem("formData"));
  const storeEmail = storedFormData ? storedFormData.email : "";
  const storePassword = storedFormData ? storedFormData.password : "";

  if (email === storeEmail && password === storePassword) {
    alert("good");
  } else {
    alert("not good");
  }
});










