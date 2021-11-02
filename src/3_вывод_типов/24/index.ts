// ПРАВИЛО 24
// ПРИМЕНЯЙТЕ ПСЕВДОНИМЫ СОГЛАСОВАННО

interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}

// шаг 1
// код рабочий, но есть повторы
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    if (
      pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1]
      || pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1]
    ) {
      return false
    }
  }
}

// шаг 2
// есть проблемы с сужением типа у box
function isPointInPolygon2(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox; // alias
  if (polygon.bbox) {
    if (
      pt.x < box.x[0] || pt.x > box.x[1] // error
      || pt.y < box.y[0] || pt.y > box.y[1] // error
    ) {
      return false
    }
  }
}

// шаг 3
// решили проблему сужения типа
// но теперь проблема согласованности имен, что вызвает трудность чтения кода
// box и bbox - разные переменные, но по факту не отлчиаются
function isPointInPolygon3(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    const box = polygon.bbox; // alias
    if (
      pt.x < box.x[0] || pt.x > box.x[1] // ok
      || pt.y < box.y[0] || pt.y > box.y[1] // ok
    ) {
      return false
    }
  }
}

// шаг 4
// решаем проблему согласованности деструктуризацией
function isPointInPolygon4(polygon: Polygon, pt: Coordinate) {
  const {bbox} = polygon; // alias
  if (bbox) {
    if (
      pt.x < bbox.x[0] || pt.x > bbox.x[1] // ok
      || pt.y < bbox.y[0] || pt.y > bbox.y[1] // ok
    ) {
      return false
    }
  }
}