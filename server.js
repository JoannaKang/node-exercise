// http모듈을 불러옵니다.
const http = require("http");
// 서버를 구동할 포트 번호를 지정합니다.
const PORT = 8080;

// 서버 객체를 생성합니다.
const server = http.createServer((request, respond) => {
  // 클라이언트로부터 사용자가 어떤 요청을 보냈는지에 대한 정보가 담긴 객체
  console.log(request);
  // 사용자의 요청에 따라 서버로부터 어떤 정보를 보내줄 것인지가 담긴 객체
  console.log(respond);
});

// 서버가 어떤 포트를 사용할 것인지 지정하고 서버를 구동합니다.
server.listen(PORT, () =>
  console.log(`🚀 서버가 포트 번호 ${PORT}에서 구동 중 입니다.`)
);
