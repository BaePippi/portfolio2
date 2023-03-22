(function () {
  "use strict";

  window.addEventListener("onbeforeunload", e=>{
    e.preventDefault();
    location.href = "index.html";
  })
})();
