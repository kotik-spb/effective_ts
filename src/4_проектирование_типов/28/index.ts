// ПРАВИЛО 28
// ИСПОЛЬЗУЙТЕ ТИПЫ, ИМЕЮЩИЕ ДОПУСТИМЫЕ ЗНАЧЕНИЯ

interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

// вариант 1
// проблемы с состояниями
// сообщение об ошибке или о загрузке 
// declare const currentPage: string;
// function renderPage(state: State) {
//   if (state.error) {
//     return `Error ! Unable to load ${currentPage}: ${state.error}`
//   }
//   else if (state.isLoading) {
//     return `Loading ${currentPage}...`;
//   }
//   return `<h1>${currentPage}</h1>\n${state.pageText}`;
// }

// async function changePage(state: State, newPage: string) {
//   state.isLoading = true;
//   try {
//     const response = await fetch(getUrlFromPage(newPage));
//     if (!response.ok) {
//       throw new Error(`Unable to load ${newPage}:${response.statusText}`);
//     }
//   } catch (e) {
//     state.error = '' + e;
//   }
// }

// вариант 2
// исправленный первый
interface RequestPending {
  
}