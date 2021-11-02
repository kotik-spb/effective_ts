// ПРАВИЛО 25
// ДЛЯ АСИНХРОННОГО КОДА ИСПОЛЬЗУЙТЕ ФУНКЦИЮ ASYNC ВМЕСТО ОБРАТНЫХ ВЫЗОВОВ

// шаг 1
// не делать так
// function fetchURL(url: string, cb: (text: string) => void) {}
// const _cache: {[url: string]: string} = {};
// function fetchWithCache(
//   url: string,
//   callback: (text: string) => void
// ) {
//   if (url in _cache) {
//     callback(_cache[url]);
//   }
//   else {
//     fetchURL(url ,text => {
//       _cache[url] = text;
//       callback(text)
//     })
//   }
// }

// // небольшая оптимизация, но все усложнилось
// let requestStatus: "loading" | "success" | "error";
// function getUsers(userId: string) {
//   fetchWithCache(`/user/${userId}`, profile => {
//     requestStatus = "success"; // потом уже success
//   })
//   requestStatus = "loading" // сначала будет статус loading
// }

// шаг 2
// function fetchURL(url: string) {}
// const _cache: {[url: string]: string} = {};
// async function fetchWithCache(url: string) {
//   if (url in _cache) {
//     return _cache[url];
//   }
//   const response = await fetch(url);
//   const text = await response.text();
//   _cache[url] = text;
//   return text
// }

// let requestStatus: "loading" | "success" | "error";
// async function getUsers(userId: string) {
//   requestStatus = "loading";
//   const profile = await fetchWithCache(`/user/${userId}`);
//   requestStatus = "success";
// }