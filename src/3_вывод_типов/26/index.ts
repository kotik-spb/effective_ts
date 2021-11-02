// ПРАВИЛО 26
// ИСПОЛЬЗУЙТЕ КОНТЕКСТ ПРИ ВЫВОДЕ ТИПОВ

// type Language = "JavaScript" | "TypeScript" | "Python";
// function setLanguage(language: Language) {}

// setLanguage("JavaScript") // ok

// let language1 = "JavaScript"
// setLanguage(language1); // error тип language1 - "string"

// let language2: Language = "JavaScript"; // определили тип переменной сразу же
// setLanguage(language2); // ok

// const language3 = "JavaScript" // сразу дали ts определить переменную как строковый литерал
// setLanguage(language3); // ok

// =====

// function panTo(where: [number, number]) {/*...*/}

// panTo([10,20]); // ok

// const loc1 = [10, 20]; // тип number[]
// panTo(loc1); // error -> number[] !== [number, number]

// const loc2: [number, number] = [10,20];
// panTo(loc2); // ok

// const loc3 = [10,20] as const;
// panTo(loc3) // error -> подается readonly, ожидается изменяемый

// // поэтому можно указать к параметру функции также readonly
// function panTo2(where: readonly [number, number]) {/*...*/}
// panTo2(loc3); // ok