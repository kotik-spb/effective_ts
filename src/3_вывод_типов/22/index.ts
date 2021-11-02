// ПРАВИЛО 22
// СТАРАЙТЕСЬ СУЖАТЬ ТИПЫ

// const el = document.getElementById("root"); // тип HTMLElement | null
// if (el) {
//   el // тип HTMLElement
//   el.innerHTML = "Party Time"
// }
// else {
//   el // тип null
//   console.log("No element #root");
// }

// =====

// function isInputElement(el: HTMLElement): el is HTMLInputElement { // если функция вернет true, то он сузит тип
//   return "value" in el;
// }

// function getElementContent(el: HTMLElement) {
//   if (isInputElement(el)) {
//     el; // тип HTMLInputElement
//     return el.value;
//   }
//   el // тип HTMLElement
//   return el.textContent;
// }

// =====

const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Michael"];

// const members = ["Jannet", "Michael"].map(
//   who => jackson5.find(n => n === who)
// ); // можем получить (string|undefined)[]

// const members = ["Jannet", "Michael"].map(
//   who => jackson5.find(n => n === who)
// ).filter(who => who !== undefined); // можем получить (string|undefined)[]


function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined
}

const members = ["Jannet", "Michael"].map(
  who => jackson5.find(n => n === who)
).filter(isDefined); // можем получить только string[]

