const fs = require("fs");
const path = require("path");
const http = require("http");

// 서버를 구동할 포트 번호를 지정합니다.
const PORT = 8080;

// 서버 객체를 생성합니다.
const server = http.createServer((request, respond) => {
  if (request.url === "/") {
    if (request.method === "GET") {
      respond.writeHead(200, { "Content-Type": "text/html" });
      respond.write("<h1>Hello World</h1>");
      respond.end("<h1>Nice to meet you!</h1>");
    }
  }
});

// 서버가 어떤 포트를 사용할 것인지 지정하고 서버를 구동합니다.
server.listen(PORT, () =>
  console.log(`🚀 서버가 포트 번호 ${PORT}에서 구동 중 입니다.`)
);
