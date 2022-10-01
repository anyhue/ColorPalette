const container = document.querySelector("#container");
const categories = document.querySelector(".categories");
const category = document.querySelectorAll(".category");
const box = document.querySelectorAll(".box");

function onClick(event) {
  window.navigator.clipboard.writeText(event.target.name);
  console.log(event.target.name);

  const textChange = () => {
    event.target.classList.value = "btn";
    event.target.innerText = "Copy Color Code";
  };

  event.target.classList.value = "changedBtn";
  event.target.innerText = "Copied";
  setTimeout(textChange, 700);
}

function categoryFilter(event) {
  for (let i = 0; i < box.length; i++) {
    if (event.target.innerText === box[i].dataset.color) {
      box[i].classList.remove("hidden");
    } else if (event.target.innerText === "All") {
      box[i].classList.remove("hidden");
    } else {
      box[i].classList.add("hidden");
    }
  }
  for (let i = 0; i < category.length; i++) {
    category[i].classList.value = "category";
    event.target.classList.value = "changedCategory";
  }
}

categories.addEventListener("click", categoryFilter);
container.addEventListener("click", onClick);
