// ПРАВИЛО 21
// КОНТРОЛИРУЙТЕ РАСШИРЕНИЕ ТИПОВ

// const mixed = ['x', 1];

// let x = 'hello';
// const y = 'hello';

// =====

const v1 = {
  x: 1,
  y: 2
} // тип {x: number, y: number}

const v2 = {
  x: 1 as const,
  y: 2
} // тип {x: 1, y: number}

const v3 = {
  x: 1,
  y: 2
} as const // тип { readonly x: 1, readonly y: 2; }


