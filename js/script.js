const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


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




