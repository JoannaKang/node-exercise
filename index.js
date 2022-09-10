// CommonJS
// 1. 하나의 요소를 불러올 때
// const greeting = require("./function");
// console.log(greeting("harry"));

// 2. 여러 개의 요소를 불러올 때
// 2-1. 일반적인 방법
// const modules = require("./function");
// console.log("🟢", modules.sayHello("harry"));
// console.log("🔵", modules.greeting);
// 2-2. 비구조화 할당
const { sayHello, greeting } = require("./function");

console.log("🟢", sayHello("harry"));
console.log("🔵", greeting);
