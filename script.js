// =========================================================
// ALPHA NYABUTO PORTFOLIO
// =========================================================


// Tell CSS that JavaScript loaded successfully.

document.body.classList.add("js-enabled");



// =========================================================
// DARK MODE
// =========================================================

const themeToggle =
  document.getElementById("theme-toggle");


if (themeToggle) {

  const themeIcon =
    themeToggle.querySelector("i");


  const savedTheme =
    localStorage.getItem("theme");


  // Load saved preference

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeIcon) {

      themeIcon.classList.remove("fa-moon");

      themeIcon.classList.add("fa-sun");

    }

  }


  // Toggle theme

  themeToggle.addEventListener(
    "click",
    function () {

      document.body.classList.toggle("dark");


      const darkMode =
        document.body.classList.contains("dark");


      if (themeIcon) {

        if (darkMode) {

          themeIcon.classList.remove("fa-moon");

          themeIcon.classList.add("fa-sun");

        }

        else {

          themeIcon.classList.remove("fa-sun");

          themeIcon.classList.add("fa-moon");

        }

      }


      localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
      );

    }
  );

}



// =========================================================
// CHANGING HERO TEXT
// =========================================================

const changingText =
  document.getElementById("changing-text");


if (changingText) {

  const words = [

    "software.",

    "web experiences.",

    "businesses.",

    "digital products.",

    "ideas."

  ];


  let wordIndex = 0;


  changingText.style.display =
    "inline-block";


  changingText.style.transition =
    "opacity 0.3s ease, transform 0.3s ease";


  setInterval(function () {

    changingText.style.opacity = "0";

    changingText.style.transform =
      "translateY(8px)";


    setTimeout(function () {

      wordIndex =
        (wordIndex + 1) % words.length;


      changingText.textContent =
        words[wordIndex];


      changingText.style.opacity = "1";

      changingText.style.transform =
        "translateY(0)";

    }, 300);


  }, 2500);

}



// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements =
  document.querySelectorAll(".reveal");


// If IntersectionObserver is supported

if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(

      function (entries, observer) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "active"
            );


            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {

        threshold: 0.08,

        rootMargin:
          "0px 0px -40px 0px"

      }

    );


  revealElements.forEach(
    function (element) {

      revealObserver.observe(element);

    }
  );

}


// Browser fallback

else {

  revealElements.forEach(
    function (element) {

      element.classList.add("active");

    }
  );

}



// =========================================================
// NAVBAR SHADOW
// =========================================================

const navbar =
  document.querySelector(".navbar");


if (navbar) {

  function updateNavbar() {

    if (window.scrollY > 20) {

      navbar.style.boxShadow =
        "0 8px 30px rgba(0, 0, 0, 0.06)";

    }

    else {

      navbar.style.boxShadow =
        "none";

    }

  }


  window.addEventListener(
    "scroll",
    updateNavbar
  );


  updateNavbar();

}



// =========================================================
// SMOOTH INTERNAL NAVIGATION
// =========================================================

const internalLinks =
  document.querySelectorAll(
    'a[href^="#"]'
  );


internalLinks.forEach(
  function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetID =
          this.getAttribute("href");


        if (
          !targetID ||
          targetID === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetID
          );


        if (target) {

          event.preventDefault();


          const navHeight =
            navbar
              ? navbar.offsetHeight
              : 0;


          const targetPosition =
            target.getBoundingClientRect().top
            +
            window.pageYOffset
            -
            navHeight;


          window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

          });

        }

      }
    );

  }
);



// =========================================================
// ACTIVE NAVIGATION LINK
// =========================================================

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach(
    function (section) {

      const sectionTop =
        section.offsetTop - 150;


      if (
        window.scrollY >= sectionTop
      ) {

        currentSection =
          section.getAttribute("id");

      }

    }
  );


  navLinks.forEach(
    function (link) {

      link.classList.remove("current");


      if (
        link.getAttribute("href")
        ===
        "#" + currentSection
      ) {

        link.classList.add("current");

      }

    }
  );

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


updateActiveNavigation();