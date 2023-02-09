document.querySelector("button.prvi").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    element.style.visibility = "visible";
  }
});

document.querySelector("button.drugi").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("logo-dizajn")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});

document.querySelector("button.treci").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("web-dizajn")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});

document.querySelector("button.cetvrti").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("development")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});
