// 1. 여러 요소를 내보낼 때
function sayHello(name) {
  const message = `hello ${name}!`;
  return message;
}

// const greeting = sayHello("harry");

// export { sayHello, greeting };

// 2. 내보낼 요소가 한가지 일 때
export default sayHello;
