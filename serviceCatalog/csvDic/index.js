const csv = require("csv-parser");
const fs = require("fs");

function csvToDictionary(csvFilePath, callback) {
  var dictionary = {};
  let rowIndex = 1;
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data) => {
      const key = `row_${rowIndex}`;
      // Generate a unique identifier based on row number
      dictionary[key] = data;
      rowIndex++;
    })
    .on("end", () => {
      callback(null, dictionary);
    })
    .on("error", (error) => {
      callback(error);
    });
}

// Usage:
const csvFilePath = "./migration.csv";

csvToDictionary(csvFilePath, (error, dictionary) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Dictionary:", dictionary);
});
