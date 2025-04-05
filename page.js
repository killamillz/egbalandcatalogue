let images = [
  { src: "./assets/draft1.jpg", caption: "Caption Text" },
  { src: "./assets/draft2.jpg", caption: "Caption Text" },
  { src: "./assets/draft13.jpg", caption: "Caption Text" },
  { src: "./assets/draft14.jpg", caption: "Caption Text" },
  { src: "./assets/draft15.jpg", caption: "Caption Text" },
  { src: "./assets/draft16.jpg", caption: "Caption Text" },
  { src: "./assets/draft17.jpg", caption: "Caption Text" },
  { src: "./assets/draft18.jpg", caption: "Caption Text" },
  { src: "./assets/draft19.jpg", caption: "Caption Text" },
  { src: "./assets/draft110.jpg", caption: "Caption Text" },
  { src: "./assets/draft111.jpg", caption: "Caption Text" },
  { src: "./assets/draft112.jpg", caption: "Caption Text" },
  { src: "./assets/draft113.jpg", caption: "Caption Text" },
  { src: "./assets/draft114.jpg", caption: "Caption Text" },
  { src: "./assets/draft115.jpg", caption: "Caption Text" },
  { src: "./assets/draft116.jpg", caption: "Caption Text" },
  { src: "./assets/draft117.jpg", caption: "Caption Text" },
  { src: "./assets/draft118.jpg", caption: "Caption Text" },
  { src: "./assets/draft119.jpg", caption: "Caption Text" },
  { src: "./assets/draft120.jpg", caption: "Caption Text" },
  { src: "./assets/draft121.jpg", caption: "Caption Text" },
  { src: "./assets/draft122.jpg", caption: "Caption Text" },
];

let slideIndex = 1;

// Dynamically create slides
function renderSlides() {
  const slideshow = document.getElementById("slideshow");
  const dotsContainer = document.getElementById("dots");

  images.forEach((img, index) => {
    // Create slide div
    const slide = document.createElement("div");
    slide.className = "mySlides fade";
    slide.innerHTML = `
      <img src="${img.src}" class="${
      index === 0 ? "w-[750px]" : "w-full"
    } h-[400px] md:h-[720px] object-fill" alt="${img.caption}" />
    `;
    slideshow.appendChild(slide);

    // Create dot
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => currentSlide(index + 1);
    dotsContainer.appendChild(dot);
  });

  // Add navigation arrows
  const prev = document.createElement("a");
  prev.className =
    "prev text-green-500 hover:text-green-700 font-bold text-2xl absolute left-0 top-1/2 transform -translate-y-1/2 px-4 z-10";
  prev.innerHTML = "&#10094;";
  prev.onclick = () => plusSlides(-1);

  const next = document.createElement("a");
  next.className =
    "next text-green-500 hover:text-green-700 font-bold text-2xl absolute right-0 top-1/2 transform -translate-y-1/2 px-4 z-10";
  next.innerHTML = "&#10095;";
  next.onclick = () => plusSlides(1);

  // Insert into the outer nav container
  const navContainerLeft = document.getElementById("nav-left");
  const navContainerRight = document.getElementById("nav-left");

  navContainerLeft.appendChild(prev);
  navContainerRight.appendChild(next);
}

renderSlides();
showSlides(slideIndex);

// Controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
