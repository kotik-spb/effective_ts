// ПРАВИЛО 23
// СОЗДАВАЙТЕ ОБЪЕКТЫ ЦЕЛИКОМ

// const pt = {};
// pt.x = 1; // ошибка, тк тип {}

// =====

// interface Point {
//   x: number;
//   y: number;
// }

// const pt = {} as Point // вариант решения
// pt.x = 2; // ОК

// =====

// declare let hasMiddle: boolean;
// const firstLast = {first: "Ivan", last: "Invanov"};
// const president = {...firstLast, ...(hasMiddle ? {middle: 'S'} : {})}; // уже починили, middle опционален

// =====
// другой вариант содания опционального поля

// function addOptional<T extends object, U extends object>(
//   a: T, b: U | null
// ): T & Partial<U> {
//   return {...a, ...b};
// }

// declare let hasMiddle: boolean;
// const firstLast = {first: "Ivan", last: "Invanov"};
// const president = addOptional(firstLast, hasMiddle ? {middle: "S"} : null); // уже починили, middle опционален
// president.middle // string

