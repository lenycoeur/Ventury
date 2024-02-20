function updateProgressBar() {
  const container = document.querySelector(".horizontal-scroll");
  const progressBar = document.getElementById("progress");

  const scrollLeft = container.scrollLeft;
  const scrollWidth = container.scrollWidth - container.clientWidth;

  const progress = (scrollLeft / scrollWidth) * 100;
  progressBar.style.width = `${progress}%`;
}

document.body.onload = function () {
  updateProgressBar();
};

