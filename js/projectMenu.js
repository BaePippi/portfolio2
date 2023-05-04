(function () {
  "use strict";

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
