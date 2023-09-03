document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const startSection = document.querySelector("#start");
    const loadingProgress = document.querySelector(".loading-progress");
    document.body.style.overflow = "hidden";

    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 175) {
        clearInterval(interval);
        overlay.style.display = "none";
        startSection.style.display = "block";
        document.body.style.overflow = "auto";
      } else {
        progress += 5;
        loadingProgress.style.width = `${progress}%`; 
      }
    }, 50);
  });