(function () {
  "use strict";

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    if (window.innerWidth <= 1024 || $menuBtn.style.display === "block") {
      if ($header.classList.contains("clickMenu")) {
        $menuFlex.style.display = "flex";
      } else {
        $menuFlex.style.display = "none";
      }
    } else {
      $menuFlex.style.display = "flex";
    }
  });

  // 반응형 메뉴
  const $menuFlex = document.querySelector(".menuFlex");
  const $header = document.querySelector(".header");
  const $menuBtn = document.querySelector(".menuBtn");

  $menuBtn.addEventListener("click", (e) => {
    $header.classList.toggle("clickMenu");
    console.log($header.classList.contains("clickMenu"));
    if ($header.classList.contains("clickMenu")) {
      setTimeout(() => {
        $menuFlex.style.display = "flex";
      }, 800);
    } else {
      $menuFlex.style.display = "none";
    }
  });

  const project = localStorage.getItem("project");

  const slideImg = document.querySelectorAll(".slideImg");
  const projectName = document.querySelector(".projectName");

  for (let i = 0; i < 3; i++) {
    console.log(slideImg[i]);
    slideImg[i].style.backgroundImage = `url('./image/${project}_${i}.png')`;
  }
  projectName.innerHTML = `${project}`;

  // const brandVal = localStorage.getItem("brand");
  // const projectInfoVal = localStorage.getItem("projectinfo");
  // const dateVal = localStorage.getItem("date");
  // const participationVal = localStorage.getItem("participation");

  // for (let z = 0; z < $td.length; z++) {
  //   if ($td[z].className === "brand") {
  //     $td[z].innerHTML = `${brandVal}`;
  //   } else if ($td[z].className === "projectInfo") {
  //     $td[z].innerHTML = `${projectInfoVal}`;
  //   } else if ($td[z].className === "date") {
  //     $td[z].innerHTML = `${dateVal}`;
  //   } else if ($td[z].className === "participation") {
  //     $td[z].innerHTML = `${participationVal}`;
  //   }
  // }
  // 5줄로 줄일 수 있었다. 역시 하면 된다!
  const $td = document.querySelectorAll("td");

  $td.forEach((item) => {
    const aa = localStorage.getItem(`${item.className}`);
    console.log(aa);
    item.innerHTML = `${aa}`;
  });

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const githubBtn = document.querySelector(".github");
  const homepageBtn = document.querySelector(".homepage");

  githubBtn.addEventListener("click", (e) => {
    const githubAddr = localStorage.getItem('github');
    window.location.href = `${githubAddr}`;
  });

  homepageBtn.addEventListener("click", (e) => {
    const homepageAddr = localStorage.getItem("homepage");
    window.location.href = `${homepageAddr}`;
  });
})();
