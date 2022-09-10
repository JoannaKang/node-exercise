function sayHello(name) {
  const message = `hello ${name}!`;
  return message;
}

const greeting = sayHello("harry");

module.exports = { sayHello, greeting };

console.log(module);
