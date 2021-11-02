// ПРАВИЛО 5
// ОГРАНИЧЬТЕ ПРИМЕНЕНИЕ ТИПОВ ANY

let age: number = 12;
// age = "12";
age = "12" as any;

// 1. Снижение безопасности
age += 1 // "121"

// 2. Позволяет нарушать условия
function calculateAge(birthDate: Date): number {
  //...; 
  // return x;
}
let birthDate: any = '1990-01-19';
calculateAge(birthDate); // ok

// 3. Исключает поддержку языковой службы (контекстная документация)
// let person = {first: 'George', last: 'Washington'}
let person: any = {first: 'George', last: 'Washington'} // нет подсказок по свойствам person.  

// Rename Symbol работает только для первой функции
interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

const response = fetch("https://jsonplaceholder.typicode.com/")

export const x = {};