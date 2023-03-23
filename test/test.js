(function () {
  ("use strict");
  // 랜딩페이지 텍스트 애니메이션
  const SEC = 1;
  function clip_text(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].style.animationDelay = `${SEC * i}s`;
      childs[i].classList.add("on");
    }
  }
  function clip_text2(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].style.animationDelay = `${(SEC * i) + 0.5}s`;
      childs[i].classList.add("on");
    }
  }

  const test = document.getElementById("test");
  const test2 = document.getElementById("test2");
  const test3 = document.getElementById("test3");

  clip_text(test);
  clip_text(test2);
  clip_text2(test3);

  const $flexBox = document.querySelector(".flexBox");
  const $box = document.querySelectorAll(".box");
  window.addEventListener("click", (e) => {
    $flexBox.classList.add("move");
    $box.forEach((e) => {
      e.classList.add("width100");
      console.log(e.style);
    });
  });

  // 프로젝트 스와이퍼
  const splide = new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: 2,
    perPage: 4.5,
    gap: 10,
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
  });
  splide.mount(window.splide.Extensions);

  // 슬라이드 호버 애니메이션
  const $slide = document.querySelectorAll(".slideImg");

  $slide.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      item.classList.toggle("hover");
      console.dir(item.firstElementChild);
      $slide.forEach((item2) => {
        if (!item2.classList.contains("hover")) {
          item2.classList.add("other");
        }
      });
      console.log(item.classList.contains("hover"));
    });
    item.addEventListener("mouseleave", (e) => {
      item.classList.toggle("hover");
      $slide.forEach((item2) => {
        item2.classList.remove("other");
      });
    });
  });
})();
