const path = require("path");

// 현재 운영체제의 디렉토리 구분자 출력
console.log(path.sep);

// 1. 상대경로 출력하기
// 상위 디렉토리의 상대경로 지정
console.log(path.join("..", "a", "b", ".."));
// 같은 디렉토리 내의 상대경로 지정
console.log(path.join("a", "b", "c"));

// 2. 절대경로 출력하기
// 실행 디렉토리 + 세부경로까지의 절대경로 출력
console.log(path.join(__dirname, "a", "b", "c"));
console.log(path.resolve("a", "b", "c"));
// 실행 디렉토리보다 한 단계 위의 디렉토리를 지정하고싶을 때
console.log(path.join(__dirname, "..", "a", "b", "c"));
console.log(path.resolve("..", "a", "b", "c"));

// path.resolve 사용 시 주의 : 오른쪽부터 경로를 읽어오다가 경로 구분자가 나타나는경우 해당 구분자 까지의 절대경로를 바로 리턴함
console.log(path.resolve("/a", "/b", "c"));
console.log(path.resolve("./a", "./b", "c"));
