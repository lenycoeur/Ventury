
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
  const email = document.getElementById("useremail").value;
  const password = document.getElementById("userpassword").value;

  const storedFormData = JSON.parse(localStorage.getItem("formData"));
  const storeEmail = storedFormData ? storedFormData.email : "";
  const storePassword = storedFormData ? storedFormData.password : "";

  if (email === storeEmail && password === storePassword) {
    alert("good");
  } else {
    alert("not good");
  }
});


/*GSAP*/

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 200;
    if (elem.classList.contains("reveal_G")) {
      x = -200;
      y = 0;
    } else if (elem.classList.contains("reveal_D")) {
      x = 200;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  gsap.utils.toArray(".reveal").forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});

gsap.registerPlugin(ScrollTrigger, { clearProps: true });










