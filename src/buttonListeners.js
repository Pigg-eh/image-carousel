import { slidePlus, slideCurrent, index } from "./moveImages";

function addBtnListeners() {
  const backBtn = document.querySelector("button.back");
  const allBtn = document.querySelector("button.all-img");
  const nextBtn = document.querySelector("button.next");

  backBtn.addEventListener("click", () => slidePlus(-1));
  allBtn.addEventListener("click", () => console.log("all logic"));
  nextBtn.addEventListener("click", () => slidePlus(1));

  const dots = document.querySelectorAll(".dot");
  dots.forEach((element) => {
    let number = +element.getAttribute("data");
    element.addEventListener("click", () => slideCurrent(number));
  });
}

export default addBtnListeners;
