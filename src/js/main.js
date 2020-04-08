window.onload = function () {
  /// toggle nav bar
  const navBtn = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  const navList = document.getElementById("nav-list");
  const navBtnOpen = document.getElementById("open");
  const navBtnClose = document.getElementById("close");

  const form = document.getElementById("form");
  const email = document.getElementById("email");

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

  //// Email form validation

  // Show input error message
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  // Show success outline
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "input success";
  }

  // Check email is valid
  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value)) {
      showError(input, "Please insert a valid email");
    } else {
      showSuccess(input);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkEmail(email);
  });
};
