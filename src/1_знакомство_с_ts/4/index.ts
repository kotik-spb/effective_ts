// ПРАВИЛО 4
// ПРИВЫКАЙТЕ К СТРУКТУРНОЙ ТИПИЗАЦИИ

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y + v.y);
}

interface NamedVector {
  x: number;
  y: number;
  name: string;
}

// сработает, поскольку есть все свойства,
// перечисленные в интерфейсе
const v: NamedVector = {x: 3, y: 4, name: "Zee"};
calculateLength(v); // все хорошо, результат 5

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}