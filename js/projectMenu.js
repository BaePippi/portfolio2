(function () {
  ("use strict");

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

  const $item = document.querySelectorAll(".item");

  $item.forEach((item) => {
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
})();
