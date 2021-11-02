// ПРАВИЛО 17
// ИСПОЛЬЗУЙТЕ READONLY ПРОТИВ ОШИБОК, СВЯЗАННЫХ С ИЗМЕНЯЕМОСТЬЮ

// function parseTaggedText(lines: string[]): string[][] {
//     const paragraphs: string[][] = [];
//     const currPara: readonly string[] = [];

//     const addParagraph = () => {
//         if (currPara.length) {
//             paragraphs.push(currPara); // ошибка
//             currPara.length = 0; // ошибка
//         }
//     };

//     for (const line of lines) {
//         if (!line) {
//             addParagraph();
//         }
//         else {
//             currPara.push(line); // ошибка
//         }
//     }
//     addParagraph();
//     return paragraphs;
// }

// -----

// function parseTaggedText(lines: string[]): string[][] {
//     const paragraphs: string[][] = [];
//     let currPara: readonly string[] = [];

//     const addParagraph = () => {
//         if (currPara.length) {
//             paragraphs.push(currPara); // ошибка
//             currPara = [] // ОК
//         }
//     };

//     for (const line of lines) {
//         if (!line) {
//             addParagraph();
//         }
//         else {
//             currPara = currPara.concat([line]); // ОК
//         }
//     }
//     addParagraph();
//     return paragraphs;
// }

// -----

// function parseTaggedText(lines: string[]): (readonly string[])[] {
//   const paragraphs: (readonly string[])[] = []; // вариант решения
//   let currPara: readonly string[] = [];

//   const addParagraph = () => {
//       if (currPara.length) {
//           paragraphs.push(currPara);
//           /**
//            * Варианты исправления
//            * 
//            * 
//            * 1) paragraphs.push([...currPara]);
//            * 2) paragraphs.push(currPara as string[]);
//            */
//           currPara = [] // ОК
//       }
//   };

//   for (const line of lines) {
//       if (!line) {
//           addParagraph();
//       }
//       else {
//           currPara = currPara.concat([line]); // ОК
//       }
//   }
//   addParagraph();
//   return paragraphs;
// }