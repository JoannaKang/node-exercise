// 1. 여러 요소를 불러올 때
// 1-1. 비구조화 할당
// import { sayHello, greeting } from "./function.mjs";
// console.log("🟢", sayHello("harry"));
// console.log("🔵", greeting);

// 1-2. 한번에 전부 import
// import * as modules from "./function.mjs";

// console.log("🟢", modules.sayHello("harry"));
// console.log("🔵", modules.greeting);

// 2. 한가지 요소만 불러올 때 (export default...)
import sayHello from "./function_package.js";
console.log("🟢", sayHello("harry"));
