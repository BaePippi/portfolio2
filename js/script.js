(function () {
  ("use strict");

    alert('이 페이지는 해상도 1920 * 1020에 최적화 되어있습니다.')
    
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
  const $pn1 = document.getElementById("pn1");
  const $pn2 = document.getElementById("pn2");
  const $pn3 = document.getElementById("pn3");
  const $pn4 = document.getElementById("pn4");
  const $pn = document.querySelector(".projectsName");
  const aa = $pn.firstElementChild.children;

  $slide.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      item.classList.toggle("hover");
        for (let i = 0; i < aa.length; i++) {
          for (let z = 0; z < aa[i].children.length; z++) {
            // console.log(aa[i].children[z]);
            aa[i].children[z].classList.toggle("on");
            aa[i].children[z].classList.toggle("off");
          }
        }
        $pn4.firstElementChild.innerText=`${item.getAttribute('id')}`
        // console.dir($pn4)
        setTimeout(()=>{
          $pn4.classList.toggle("displayNone");
        },300)


      $slide.forEach((item2) => {
        if (!item2.classList.contains("hover")) {
          item2.classList.add("other");
        }
      });
      // console.log(item.classList.contains("hover"));
    });
    item.addEventListener("mouseleave", (e) => {
      item.classList.toggle("hover");
      for (let i = 0; i < aa.length; i++) {
        for (let z = 0; z < aa[i].children.length; z++) {
          // console.log(aa[i].children[z]);
          // if (aa[i].children[z].classList.contains("on")) {
          //   aa[i].children[z].classList.remove("on");
          // }
          aa[i].children[z].classList.toggle("on");
          aa[i].children[z].classList.toggle("off");
        }
      }
      // $pn3.classList.toggle("on");
      // setTimeout(()=>{
        $pn4.classList.toggle("displayNone");
      // },500)
      

      $slide.forEach((item2) => {
        item2.classList.remove("other");
      });
    });
    console.dir(item.attributes[3]);
    item.addEventListener('click', e => {
      localStorage.setItem('project', item.id)
      for(let i=0; i<item.attributes.length; i++){        
          localStorage.setItem(`${item.attributes[i].name}`, item.attributes[i].value)
        }
    })
  });
})();
