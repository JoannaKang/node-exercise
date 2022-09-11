const fs = require("fs");
const path = require("path");
// 1.새 폴더 만들기
if (!fs.existsSync("fileSystemExample")) {
  fs.mkdir("./fileSystemExample", (err) => {
    if (err) throw err;
    console.log("New directory created!");
  });
}

// 2. 폴더 안에 새 파일 만들기
fs.writeFile(
  path.join(__dirname, "fileSystemExample", "greeting.txt"),
  "Hello!",
  (err) => {
    if (err) throw err;
    console.log("Write complete");
  }
);

// 3. 존재하는 파일 안에 내용 추가하기
fs.appendFile(
  path.join(__dirname, "fileSystemExample", "greeting.txt"),
  "\nMy name is Sooyeon",
  (err) => {
    if (err) throw err;
    console.log("Append complete");
  }
);

fs.appendFile(
  path.join(__dirname, "fileSystemExample", "newFile.txt"),
  "New file created!",
  (err) => {
    if (err) throw err;
    console.log("Append complete");
  }
);

// 4. 파일 삭제하기
fs.unlink(path.join(__dirname, "fileSystemExample", "newFile.txt"), (err) => {
  if (err) throw err;
  console.log("file deleted!");
});
