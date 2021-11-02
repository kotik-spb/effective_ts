// interface Person { name: string };

// const alice: Person = { name: "Alice" } // тип Person
// const bob = { name: "Bob" } as Person; // тип Person

// =====

// const alice: Person = {}; // ошибка
// const bob = {} as Person; // верно

// =====

// const alice: Person = {
//     name: "Alice",
//     occupation: "TypeScript Developer"
// }; // есть ошибка

// const bob = {
//     name: "Bob",
//     occupation: "JavaScript Developer"
// } as Person; // верно

// =====

// document
//     .querySelector("#myButton")!
//     .addEventListener('click',
//     e => {
//         e.currentTarget; // тип EventTarget
//         const button = e.currentTarget as HTMLButtonElement; // HTMLButtonElement является подтипом EventTarget
//         button;
//     });

// interface Person {name: string;}
// const body = document.body;
// // здесь будут ошибки, поскольку объекты не являются подтипами по отношению друг к другу
// const el = body as Person; // ошибка
// const el2 = {name: "Vlad"} as HTMLElement; // ошибка
// ошибки можно избежать через использование утверждения типа unknown
// const el = document.body as unknown as Person; // верно

// ===== ПРАВИЛО 10

// function isGreeting(phase: String) {
//     return [
//         'hello',
//         'good day'
//     ].includes(phase) // ошибка, поскольку здесь ожидает примитив, а не wrapper 
// }

// ===== ПРАВИЛО 11 Проверяйте пределы исключительных свойств типа

// interface Room {
//     numDoors: number;
//     ceilingHeightFt: number;
// }

// const r: Room = {
//     numDoors: 1,
//     ceilingHeightFt: 10,
//     elephant: "present" // ошибка
// }

// const obj = {
//     numDoors: 1,
//     ceilingHeightFt: 10,
//     elephant: "present" // okay
// };

// const r1: Room = obj; // все нормально

// =====

// interface Options {
//     title: string;
//     darkMode?: boolean;
// }

// function createWindow(options: Options) {
//     if (options.darkMode) {
//         setDarkMode();
//     }
//     // ..
// }

// createWindow({
//     title: "Spider Solitaire",
//     darkmode: true // ошибка
// });

// const o1: Options = document; // ok
// const o2: Options = new HTMLAnchorElement; // ok

// const o: Options = {
//     darkmode: true, // ошибка
//     title: "Ski Free"
// }

// const intermediate = {darkmode: true, title: "Ski Free"};
// const o3: Options = intermediate; // okay
// const o4 = {darkmode: true, title: 'Ski Free'} as Options;  // okay

// =====

// interface Options {
//     darkMode?: boolean;
//     [otherOptions: string]: unknown; // сигнатура индекса для избежания проверки
// }

// const o: Options = {darkmode: true}; // ok

// =====

// interface LineChartOptions {
//     logscale?:boolean;
//     invertedYAxis?: boolean;
//     areaChart?: boolean;
// }

// const opts = {logScale: true};
// const o: LineChartOptions = opts; // ошибка

// ===== ПРАВИЛО 12. По возможности применяйте типы ко всему выражению

// type DiceRollFn = (numSides: number) => number;
// const rollDice: DiceRollFn = numSides => { /* ... */}

// =====

// function add(a: number, b: number) {return a + b;}
// function sub(a: number, b: number) {return a - b;}
// function mul(a: number, b: number) {return a * b;}
// function div(a: number, b: number) {return a / b;}

// type BinaryFn = (a: number, b: number) => number;
// const add: BinaryFn = (a,b) => a + b;
// const sub: BinaryFn = (a,b) => a - b;
// const mul: BinaryFn = (a,b) => a * b;
// const div: BinaryFn = (a,b) => a / b;

// =====



// =====


// =====


// =====


// =====
