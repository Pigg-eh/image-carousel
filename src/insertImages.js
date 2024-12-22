import addListeners from "./buttonListeners";

function pullImages(images) {
  console.log("image array");
  console.log(images);
  let i = 0;
  for (let img of images) {
    const div = document.createElement("div");

    div.classList.add("imageContainer");
    let container = document.querySelector("div.image-carousel");
    container.appendChild(div);
    const imgNode = new Image();
    imgNode.src = img;
    //use data attributes to change whats in front
    imgNode.setAttribute("data", i);
    i++;

    imgNode.classList.add("hidden");
    console.log("imgNode");
    console.log(imgNode);
    div.appendChild(imgNode);
  }
  //move this into its own module
  const firstImg = document.querySelector("img");
  firstImg.classList.toggle("hidden");
  firstImg.classList.toggle("visible");
}

export default pullImages;
