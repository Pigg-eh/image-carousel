function pullImages(images) {
  console.log(images);
  for (let img of images) {
    const div = document.createElement("div");
    div.classList.add("imageContainer");
    let container = document.querySelector("div.image-carousel");
    container.appendChild(div);
    const imgNode = new Image();
    imgNode.src = img;
    console.log(imgNode);
    div.appendChild(imgNode);
  }
}

export default pullImages;
