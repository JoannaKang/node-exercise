const fs = require("fs");
const path = require("path");

// 0. 동기적, 비동기적 방식의 비교
// 비동기적 방식
// fs.readFile("package.json", (err, data) => console.log("🟢", err, data));
// console.log("🟢 Not Synchronos");
// 동기적 방식
// const result = fs.readFileSync("package.json");
// console.log("🔵", result);
// console.log("🔵 Synchronos");

// 1. 새 폴더 생성하기
if (!fs.existsSync("fileSystemExample")) {
  fs.mkdirSync("./fileSystemExample");
}

// 2. 새 파일 생성하기
// 파일을 생성할 경로를 지정합니다.
// 환경변수를 사용해 절대경로(Absolut path)로 표시해보기
const databaseFileDir = path.join(__dirname, "fileSystemExample", "items.json");
// 환경변수를 사용해 절대경로(Absolut path)로 표시해보기
// const databaseFileDir = path.join("fileSystemExample", "items.json");

// 파일 생성 경로에 같은 파일이 존재하지 않는다면, 지정된 경로 안 파일에 JSON 형태 데이터를 추가합니다.
if (!fs.existsSync(databaseFileDir)) {
  fs.writeFileSync(databaseFileDir, '{"items":[]}\n');
}

// 3. 파일 업데이트 하기
// 지정한 경로의 파일에서 데이터를 읽어옵니다.
const databaseBuffer = fs.readFileSync(databaseFileDir);
// 버퍼 형태로 로딩된 데이터를 자바스크립트 객체로 변환합니다.
const parsedDatabase = JSON.parse(databaseBuffer);

// 객체 형태로 변환된 데이터 안 items 의 배열 안에 새 내용을 추가합니다.
parsedDatabase.items.push({ name: "egg" });

// 자바스크립트 객체 형태의 데이터를 다시 텍스트로 변환한 결과를 파일 내용에 업데이트 합니다.
fs.writeFileSync(databaseFileDir, JSON.stringify(parsedDatabase));

// 6. 파일 지우기
// fs.unlinkSync(databaseFileDir);
