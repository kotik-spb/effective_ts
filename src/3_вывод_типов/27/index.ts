// ПРАВИЛО 27
// ИСПОЛЬЗУЙТЕ ФУНКЦИОНАЛЬНЫЕ КОНСТРУКЦИИ И БИБЛИОТЕКИ ДЛЯ СОДЕЙСТВИЯ ДВИЖЕНИЮ ТИПОВ

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: {[team: string]: BasketballPlayer[]}

// вариант 1
let allPlayers = []; // неявно тип any[]
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players) // error -> неявный тип any[]
}

// вариант 2
// аннотация типа
let allPlayers2: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers2 = allPlayers2.concat(players) // ok
}

// вариант 3
// использование функционального метода
// лучший выбор
const allPlayers3 = Object.values(rosters).flat(); // ok
// сигнатура типа flat() меняется наподобии -> T[][] => T[]