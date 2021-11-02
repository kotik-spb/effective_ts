// ПРАВИЛО 18
// ИСПОЛЬЗУЙТЕ ОТОБРАЖЕННЫЕ ТИПЫ ДЛЯ СИНХРОНИЗАЦИИ ЗНАЧЕНИЙ

// interface ScatterProps {
//   // данные
//   xs: number[];
//   ys: number[];
//   // отображение
//   xRange: [number, number];
//   yRange: [number, number];
//   color: string;
//   // события
//   onClick: (x: number, y: number, index: number) => void;
// }

// ВАРИАНТ 1
// "закрыт при отказе"
// самый точный способ, график вссегда будет правильным
// недостаток - слишком частая перерисовка
// function shouldUpdate(
    // oldProps: ScatterProps,
    // newProps: ScatterProps) {
//   let k: keyof ScatterProps;
//   for (k in oldProps) {
//     if (
//       oldProps[k] !== newProps[k]
//       && k !== "onClick") {
//         return true;
//       }
//   }
//   return false;
// }

// ВАРИАНТ 2
// "при отказе открыт"
// нет ненужных перерисовок
// могут быть упущены необходимые перерисовки
// function shouldUpdate(
//   oldProps: ScatterProps,
//   newProps: ScatterProps
// ) {
//   return (
//     oldProps.xs !== newProps.xs
//     || oldProps.ys !== newProps.ys
//     || oldProps.xRange !== newProps.xRange
//     || oldProps.yRange !== newProps.yRange
//     || oldProps.color !== newProps.color
//     // нет проверки onClick
//   )
// }

// ВАРИАНТ 3
// заставляем систему типов работать на нас
// const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = { // сообщаем, что модуль проверки должен иметь те же типы
//   xs: true,
//   ys: true,
//   xRange: true,
//   yRange: true,
//   color: true,
//   onClick: false
// }

// function shouldUpdate(
//   oldProps: ScatterProps,
//   newProps: ScatterProps
// ) {
//   let k: keyof ScatterProps;
//   for (k in oldProps) {
//     if (
//       oldProps[k] !== newProps[k]
//       && REQUIRES_UPDATE[k]
//     ) {
//       return true;
//     }
//   }
//   return false;
// }