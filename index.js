const btn = document.querySelector(".btn");
const images = document.querySelectorAll("img");
const numImages = images.length;
let newImage = 1;
let timeout;

btn.addEventListener("click", () => {
  oldImage = newImage;
  newImage = Math.floor(Math.random() * numImages);
  while (oldImage === newImage) {
    newImage = Math.floor(Math.random() * numImages);
  }
  clearTimeout(timeout);

  updateImage();
});

updateImage();

function updateImage() {
  let activeImage = document.querySelectorAll(".active");
  activeImage.forEach((img) => {
    img.classList.remove("active");
    images[newImage].classList.add("active");
  });

  timeout = setTimeout(() => {
    oldImage = newImage;
    newImage = Math.floor(Math.random() * numImages);
    while (oldImage === newImage) {
      newImage = Math.floor(Math.random() * numImages);
    }
    updateImage();
  }, 3000);
}
