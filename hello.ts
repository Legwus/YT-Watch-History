function greet(name: string): string {
    return `Hello, ${name}!`;
}

let decimal: number = 6;
let float: number = 3.14;
let result: number;
result = float + decimal;
let color: string = "blue";
let age: number = 24;
let fullName: string = "spongebob squarepants";
const message: string = greet(result + " Worlds, my name is " + fullName + " and I am " + age + ". My favorite colour is " + color);
console.log(message); // Output: nice sentence!