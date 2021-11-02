// ПРАВИЛО 13
// ЗНАЙТЕ РАЗНИЦУ МЕЖДУ TYPE И INTERFACE

type TState = {
  name: string;
  capital: string;
}

interface IState {
  name: string;
  capital: string;
}

const wyoming: TState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500000 // ошибка
}

type TDict = {[key: string]: string};
interface IDict {
  [key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => '' + x; // okay
const toStrI: IFn = x => '' + x; // okay

type TFnWithProperties = {
  (x: number): number;
  prop: string;
}

interface IFnWithProperties {
  (x: number): number;
  prop: string;
}

// =====


// обобщенные псевдонимы типов
type TPair<T> = {
  first: T;
  second: T
}

interface IPair<T> {
  first: T;
  second: T;
}

// =====

// могут расширять друг друга
interface IStateWithPop extends TState {
  population: number;
}

type TStateWithPop = IState & { population: number; }

// =====

// существуют типы объединения, но не интерфейсы объединения
type AorB = 'a' | 'b';

type Input = { a: string, b: string}
type Output = { c: string, d: string}

interface IVariableMap {
  [name: string]: Input | Output
}

type NamedVariable = (Input | Output) & { name: string; }

// =====