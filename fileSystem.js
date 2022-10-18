const fs = require("fs");
const path = require("path");

// 1.create new folder
if (!fs.existsSync("fileSystemExample")) {
  fs.mkdirSync("./fileSystemExample");
}

// Absolut path
// const databaseFile = path.join(__dirname, "fileSystemExample", "items.json");
// Relative path
const databaseFile = path.join("fileSystemExample", "items.json");
console.log(databaseFile);

// 2. create new data in the file
if (!fs.existsSync(databaseFile)) {
  fs.writeFileSync(databaseFile, '{"items":[]}\n');
}

// 3. load the file content in the memory
databaseData = fs.readFileSync(databaseFile);

// console.log(databaseData);

database = JSON.parse(databaseData);

// console.log(database);

// 4. change database in memory
database.items.push({ name: "egg" });

// 5. Write back to the file
fs.writeFileSync(databaseFile, JSON.stringify(database));
