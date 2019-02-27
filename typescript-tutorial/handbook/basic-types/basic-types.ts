// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let fullName: string = "Bob Bobbington";
let age: number = 37;
// let sentence: string = `Hello, my name is ${fullName} I'll be ${age + 1} years old next month.`;
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be" + (age + 1) + "years old next month.";

// Array
// let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10];

console.log(x[0].substr(1));

// Enum
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(colorName); 

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
let anyList: any[] = [1, true, "free"];
anyList[1] = 100;

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

// null and undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("something fialed");
}

function infinteLoop(): never {
    while (true) {
    }
}

// Object
declare function create(o: object | null): void;
create({ prop: 0}); 
create(null);

// Type assertions 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLenght2: number = (someValue as string).length;
