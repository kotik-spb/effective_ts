// ПРАВИЛО 19
// НЕ ЗАСОРЯЙТЕ КОД НЕНУЖНЫМИ АННОТАЦИЯМИ ТИПОВ

// let x: number = 12; // нет
// let x = 12; // да

// =====

// нет (среда автоматически определит типы)
// const person: {
//   name: string;
//   born: {
//     where: string,
//     when: string
//   },
//   died: {
//     where: string,
//     when: string
//   }
// } = {
//   name: "Ivan Ivanov",
//   born: {
//     where: "Moscow, Russia",
//     when: '2000'
//   },
//   died: {
//     where: "Moscow, Russia",
//     when: '2020'
//   }
// }

// да
// const person = {
//   name: "Ivan Ivanov",
//   born: {
//     where: "Moscow, Russia",
//     when: '2000'
//   },
//   died: {
//     where: "Moscow, Russia",
//     when: '2020'
//   }
// }

// =====

// обычно параметрам нужно задавать тип,
// но в данном случае, когда есть присвоение по умолчанию, оно не требуется 
// function parseNumber(str: string, base = 10) {}

// =====

