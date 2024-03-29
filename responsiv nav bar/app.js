const navSlide = () => {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toogle Nav
  bar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }

      console.log(index / 7);
    });

    bar.classList.toggle("toggle");
  });
};

navSlide();
