const fs = require("fs");
const path = require("path");
const http = require("http");

// 서버를 구동할 포트 번호를 지정합니다.
const PORT = 8080;
// 데이터베이스 역할을 할 fileSystmeExample 폴더 안 items.json파일을 가리키는 절대경로를 지정합니다. 단, 환경변수를 사용하여 경로를 지정합니다.
const databaseDir = path.join(__dirname, "fileSystemExample", "items.json");

function loadData() {
  const data = fs.readFileSync(databaseDir);
  const parsedData = JSON.parse(data);
  return parsedData;
}

function saveData(data) {
  fs.writeFileSync(databaseDir, JSON.stringify(data));
}

// 서버 객체를 생성합니다.
const server = http.createServer((request, respond) => {
  // 사용자가 localhost:8080/items 로 GET 요청을 보낼 시 에 처리할 내용을 정의합니다.
  if (request.url === "/items") {
    if (request.method === "GET") {
      // 클라이언트에 보내주는 정보의 종류와 함께 요청이 성공적으로 수행되었음을 알려주는 상태 코드를 전달합니다.
      respond.writeHead(200, { "Content-Type": "application/json" });
      // 데이터베이스 경로에 저장된 파일 내용을 읽어온 내용을 클라이언트에 전달 후 응답을 종료합니다.
      respond.end(fs.readFileSync(databaseDir));
    } else if (request.method === "POST") {
      const reqChunk = [];
      request
        .on("data", (chunk) => {
          reqChunk.push(chunk);
        })
    }
  }
});

// 서버가 어떤 포트를 사용할 것인지 지정하고 서버를 구동합니다.
server.listen(PORT, () =>
  console.log(`🚀 서버가 포트 번호 ${PORT}에서 구동 중 입니다.`)
);
