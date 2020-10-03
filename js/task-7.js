/*Напиши скрипт, который реагирует на изменение значения
 input#font-size-control (событие input) и изменяет инлайн-стиль
  span#text обновляя свойство font-size. В результате при
   перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/

const rangeOfFontSize = document.querySelector("#font-size-control");
const TextToChangFontSize = document.querySelector("#text");

console.log(rangeOfFontSize);
console.log(TextToChangFontSize);
rangeOfFontSize.addEventListener("input", rangeChangingFont);

function rangeChangingFont() {
  TextToChangFontSize.style.fontSize = `${rangeOfFontSize.value}px`;
}
