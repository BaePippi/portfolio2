(function () {
  ("use strict");

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', ()=>{
    let vh = window.innerHeight*0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  })

  // alert("이 페이지는 해상도 1920 * 1080에 최적화 되어있습니다.");

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
      childs[i].style.animationDelay = `${SEC * i + 0.5}s`;
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
  const $landingBox = document.querySelector(".landingBox")
  const $box = document.querySelectorAll(".box");
  const $bgBox = document.querySelectorAll(".bgBox")
  console.log($bgBox)
  window.addEventListener("click", (e) => {
    $landingBox.classList.add("move");
    $box.forEach((e) => {
      e.classList.add("width100");
      console.log(e.style);
    });
    console.log(window.pageXOffset + $box[2].getBoundingClientRect().left);
  });
  window.addEventListener("resize", e=>{
    if (
      window.pageXOffset + $box[2].getBoundingClientRect().left<0 
    ) {
      console.log($landingBox.style);
      if ($landingBox.style.display !== "none") {
        $landingBox.style.display = "none";
        $bgBox[2].style.display = "none";
      }
    }
  })

  // 프로젝트 스와이퍼
  const splide = new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: 2,
    // perPage: 4.5,
    mediaQuery: "min",
    breakpoints: {
      1300:{perPage: 4 },
      1024: { perPage: 3 },
      768: { perPage: 2.5 },
      680: { perPage: 1.5 },
    },
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
  const $pn1 = document.getElementById("pn1");
  const $pn2 = document.getElementById("pn2");
  const $pn3 = document.getElementById("pn3");
  const $pn4 = document.getElementById("pn4");
  const $pn = document.querySelector(".projectsName");
  const aa = $pn.firstElementChild.children;
  const bb = document.querySelector(".splide__list");

  $slide.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      item.classList.toggle("hover");
      for (let i = 0; i < aa.length; i++) {
        for (let z = 0; z < aa[i].children.length; z++) {
          // console.log(aa[i].children[z]);
          // if (e.target.classList) {
          aa[i].children[z].classList.add("on");
          aa[i].children[z].classList.remove("off");
          // }
        }
      }
      $pn4.firstElementChild.innerText = `${item.getAttribute("id")}`;
      // console.dir($pn4)
      setTimeout(() => {
        $pn4.classList.remove("displayNone");
      }, 300);

      $slide.forEach((item2) => {
        if (!item2.classList.contains("hover")) {
          item2.classList.add("other");
        }
      });
      // console.log(item.classList.contains("hover"));
    });
    item.addEventListener("mouseleave", (e) => {
      item.classList.toggle("hover");

     

      $slide.forEach((item2) => {
        item2.classList.remove("other");
      });
    });
    console.dir(item.attributes[3]);
    item.addEventListener("click", (e) => {
      localStorage.setItem("project", item.id);
      for (let i = 0; i < item.attributes.length; i++) {
        localStorage.setItem(
          `${item.attributes[i].name}`,
          item.attributes[i].value
        );
      }
    });
  });
  document.addEventListener("mousemove", (e) => {
    if (
      !e.target.classList.contains("imgA") &&
      !e.target.classList.contains("slideImg") &&
      !e.target.classList.contains("splide__slide") &&
      !e.target.classList.contains("splide__list") &&
      !e.target.classList.contains("splide__track") &&
      !e.target.classList.contains("arrow") &&
      !e.target.classList.contains("line1") &&
      !e.target.classList.contains("line2") &&
      !e.target.classList.contains("line3")
    ) {
      for (let i = 0; i < aa.length; i++) {
        for (let z = 0; z < aa[i].children.length; z++) {
          aa[i].children[z].classList.remove("on");
          aa[i].children[z].classList.add("off");
        }
      }
      $pn4.classList.add("displayNone");
    }
  });
})();
