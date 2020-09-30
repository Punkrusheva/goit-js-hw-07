/*В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный
 li, после чего вставит все li за одну операцию в список ul.ingredients. Для
  создания DOM-узлов используй document.createElement().
*/
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
/*const listEl = document.querySelector("#ingredients");
//console.log(listEl);
const newIngredient = document.createElement("li");
newIngredient.textContent = "ingredient";
//console.log(newIngredient);
listEl.appendChild(newIngredient);
console.log(listEl);*/

const newListItem = ingredients.map((ingredient) => {
  const listEl = document.querySelector("#ingredients");
  //console.log(listEl);
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  //console.log(newIngredient);
  listEl.appendChild(newIngredient);
  //console.log(listEl);

  return listEl;
});
console.log(newListItem);
