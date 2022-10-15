const fs = require("fs");
const path = require("path");

const http = require("http");

const databaseFile = path.join(__dirname, "fileSystemExample", "items.json");

const data = JSON.parse(fs.readFileSync(databaseFile));

const server = http.createServer((req, res) => {
  // 클라이언트로부터 사용자가 어떤 요청을 보냈는지에 대한 정보가 담긴 객체
  // console.log(req);
  // 사용자의 요청에 따라 서버로부터 어떤 정보를 보내줄 것인지가 담긴 객체
  // console.log(res);

  if (req.url === "/") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } else if (req.method === "POST") {
      const body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          const bodyStr = Buffer.concat(body).toString();
          const inputData = JSON.parse(bodyStr);

          data.items.push(inputData);
          fs.writeFileSync(databaseFile, JSON.stringify(data));

          res.writeHead(201);
          res.end();
        });
    }
  }
});

// 요청 사항을 처리할 때 어떤 포트를 사용할 것인지 리스너를 등록
server.listen(8080);
