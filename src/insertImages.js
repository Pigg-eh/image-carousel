import transitionImages from "./moveImages";
import { slideCurrent } from "./moveImages";

function pullImages(images) {
  console.log("image array");
  console.log(images);
  let i = 0;
  for (let img of images) {
    const div = document.createElement("div");

    div.classList.add("slide");

    let container = document.querySelector("div.image-carousel");

    container.appendChild(div);
    const imgNode = new Image();
    imgNode.src = img;
    // imgNode.setAttribute("data", i);
    i++;

    // imgNode.classList.add("inactive");
    div.appendChild(imgNode);

    const dotsContainer = document.querySelector(".dots-container");
    const span = document.createElement("span");
    dotsContainer.appendChild(span);
    span.setAttribute("data", i);
    span.classList.add("dot");
  }

  transitionImages();
}

export default pullImages;
