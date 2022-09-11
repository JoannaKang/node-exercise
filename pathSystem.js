const path = require("path");
console.log(path);

// 현재 실행중인 파일의 경로
console.log("File directory :", __filename);
// 현재 작업중인 파일 이름
console.log("File name :", path.basename(__filename));
// 현재 실행중인 폴더의 경로
console.log("Absolute path :", path.dirname(__filename));
// 전체 절대 경로
console.log("Full path :", path.join(__filename));
