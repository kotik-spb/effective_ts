// ПРАВИЛО 20
// ДЛЯ РАЗНЫХ ТИПОВ - РАЗНЫЕ ПЕРЕМЕННЫЕ

// function fetchProduct(id: string) {}
// function fetchProductBySerialNumber(id: number) {}


// ОШИБКА
// let id = "12-34-56";
// fetchProduct(id);
// id = 123456; // ошибка, number не может быть string
// fetchProductBySerialNumber(id); // ошибка

// OK
// разделили переменную id по лоигке на две части
// const id = "12-34-56";
// fetchProduct(id);
// const serialId = 123456; // ok
// fetchProductBySerialNumber(serialId); // ok
