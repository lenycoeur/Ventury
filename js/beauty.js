var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
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

/*document.addEventListener('DOMContentLoaded', function () {
    gsap.utils.toArray('.scroll').forEach(function (element) {
        gsap.from(element, {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: element,
                start: 'left 100%',
                toggleClass: 'scroll-visible',
            }
        });
    });
});*/