import { annotate } from "https://unpkg.com/rough-notation?module";

let selectors = document.querySelectorAll("em");
selectors.forEach((selector, t) =>
  setTimeout(
    () =>
      annotate(selector, {
        type: "underline",
        iterations: 3,
        color: "var(--secondary-color)",
      }).show(),
    1500 + t * 700
  )
);

// selectors = document.querySelectorAll("section");
// selectors.forEach((selector) => {
//   selector.addEventListener("transitionend", )
// })

selectors = document.querySelectorAll("section .container h2");
selectors.forEach((selector) => {
  let n = annotate(selector, {
    type: "highlight",
    iterations: 2,
    animationDuration: 1000,
    color: "var(--secondary-color)",
  });
  let parent = selector.parentNode.parentNode;
  let applied = false;

  parent.addEventListener("transitionend", (e) => {
    if (
      !applied &&
      e.propertyName === "opacity" &&
      e.currentTarget === parent
    ) {
      console.log(e.currentTarget);
      console.log(e);
      applied = true;
      setTimeout(() => n.show(), 500);
    }
  });
});
