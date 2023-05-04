(function () {
  "use strict";
  // 랜딩페이지
  const SEC = 1;
  function clip_text(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].style.animationDelay = `${SEC * i}s`;
      childs[i].classList.add("on");
    }
  }

  const test = document.getElementById("test");
  const test2 = document.getElementById("test2");
  const test3 = document.getElementById("test3");

  clip_text(test);
  clip_text(test2);
  clip_text(test3);

  const $landing = document.querySelector(".landingBox");
  console.log($landing);
  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
      document.body.className = "fade";
    }, 5000);
    window.setTimeout(() => {
      $landing.classList.add("displayNone");
      document.body.classList.remove("fade");
    }, 8000);
  });
})();
