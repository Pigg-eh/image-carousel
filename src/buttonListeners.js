import { slidePlus, slideCurrent } from "./moveImages";

function addBtnListeners() {
  const backBtn = document.querySelector("button.back");
  const allBtn = document.querySelector("button.all-img");
  const nextBtn = document.querySelector("button.next");

  backBtn.addEventListener("click", () => slidePlus(-1));
  allBtn.addEventListener("click", () => console.log("all logic"));
  nextBtn.addEventListener("click", () => slidePlus(1));
}
export default addBtnListeners;
