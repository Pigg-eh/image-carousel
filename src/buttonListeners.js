function addBtnListeners() {
  const backBtn = document.querySelector("button.back");
  const allBtn = document.querySelector("button.all-img");
  const nextBtn = document.querySelector("button.next");

  backBtn.addEventListener("click", () => console.log("back logic"));
  allBtn.addEventListener("click", () => console.log("all logic"));
  nextBtn.addEventListener("click", () => console.log("next logic"));
}
export default addBtnListeners;
