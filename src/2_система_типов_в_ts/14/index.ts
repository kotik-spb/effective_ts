// ПРАВИЛО 14
// ОПЕРАЦИИ ТИПОВ И ОБОБЩЕНИЯ СОКРАЩАЮТ ПОВТОРЫ

function distance(a: {x: number, y: number}, b: {x: number, y: number}) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

interface Point2D {
  x: number;
  y: number;
}

function distance1(a: Point2D, b: Point2D) {/* ... */}

// =====

// при таких интерфейсах, если мы что-то добавим в
// Person, то оба отделятся друг от друга
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}

// а это решит проблему
interface PersonWithBirthDate extends Person {
  birth: Date;
}

// =====

// определим TopNavState как подмножество State
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

type TopNavState = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"]
}
// или
type TopNavState1 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
}

// фича языка Pick
type TopNavBar2 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

// =====

interface SaveAction {
  type: "save"
  // ...
}

interface LoadAction {
  type: "load"
  // ...
}

type Action = SaveAction | LoadAction;
type ActionType = "save" | "load" // повторяющиеся типы

type ActionType2 = Action['type'];

// =====

interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

class UIWidget {
  constructor(init: Options) {}
  update(options: OptionsUpdate) {}
}

// можно сформировать OptionsUpdate из Options
type OptionsUpdate1 = {[k in keyof Options]?: Options[k]};
type OptionsKeys = keyof Options;

// или же использовать встроенную фичу Partial

class UIWidget1 {
  constructor(init: Options) {}
  update(options: Partial<Options>) {}
}

// =====

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA"
}

type OptionsX = typeof INIT_OPTIONS;

// =====

function getUserInfo(userId: string) {
    let name = 'Vlad';
    let age = 14
    let height = 180
    let weight = 65
    let favouriteColor = 'gray'
  return {
    userId,
    name,
    age,
    height,
    weight,
    favouriteColor
  }
}

// создадим именованный тип для выведенного возврата функции
type UserInfo = ReturnType<typeof getUserInfo>