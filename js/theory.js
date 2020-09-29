const button = document.querySelector(".item");

button.style.backgroundColor = "teal";
console.log(button.style); // объект инлайн стилей

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.setAttribute("src", "https://placeimg.com/640/480/nature");
image.setAttribute("alt", "nature");

console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">

elem.innerHTML = '<p class="text">Pellentesque habitant.</p>';
