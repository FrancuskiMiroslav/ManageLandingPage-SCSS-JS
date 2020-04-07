/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
window.onload = function () {
  const navBtn = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  const navList = document.getElementById("nav-list");
  const navBtnOpen = document.getElementById("open");
  const navBtnClose = document.getElementById("close");

  navBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    navBtnOpen.classList.toggle("close");
    navBtnClose.classList.toggle("open");
    navBtnClose.classList.toggle("close");
    nav.classList.toggle("overlay");
  });

  // carousel
  const carousel = document.getElementById("carousel");

  // using fetch API method
  fetch("./js/carousel.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      // getting array from response and putting it in html
      data.slides.forEach(({ title, type, content, image }, i) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const slideContent = document.createElement("div");
        slideContent.classList.add("carousel__content");

        const slideImage = document.createElement("img");
        slideImage.classList.add("carousel__img");
        slideImage.src = image;

        const contentTitle = document.createElement("h3");
        contentTitle.classList.add("carousel__title");
        contentTitle.textContent = title;

        const contentType = document.createElement("span");
        contentType.textContent = type;

        const contentContent = document.createElement("p");
        contentContent.classList.add("carousel__info");
        contentContent.textContent = content;

        slide.appendChild(slideImage);
        contentTitle.appendChild(contentType);
        slideContent.appendChild(contentTitle);
        slideContent.appendChild(contentContent);
        slide.appendChild(slideContent);

        carousel.appendChild(slide);

        let swiper = new Swiper(".swiper-container", {
          spaceBetween: 30,
          slidesPerView: "auto",
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      });
    })
    .catch((err) => console.error(err));
};
