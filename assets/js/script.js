function openBurger() {
  let options = document.querySelector(".navigation .hamburger-options");
  if (options.classList.contains("open-burger")) {
    options.classList.toggle("open-burger");
  } else {
    options.classList.toggle("open-burger");
  }
}
function openDropdown() {
  let options = document.querySelector(".navigation .dropdown-options");
  if (options.classList.contains("open-dropdown")) {
    options.classList.toggle("open-dropdown");
  } else {
    options.classList.toggle("open-dropdown");
  }
}

function nextSlide() {
  let imageContainer = document.querySelectorAll(".image-container");
  imageContainer.forEach((image) => {
    if (image.style.transform == "translateX(100%)") {
      image.style.transform = "translateX(0)";
    } else {
      image.style.transform = "translateX(-100%)";
    }
  });
}

function previousSlide() {
  let imageContainer = document.querySelectorAll(".image-container");
  imageContainer.forEach((image) => {
    if (image.style.transform == "translateX(-100%)") {
      image.style.transform = "translateX(0)";
    } else {
      image.style.transform = "translateX(100%)";
    }
  });
}
