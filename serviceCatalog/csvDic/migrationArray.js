const csv = require("csv-parser");
const fs = require("fs");

function csvToArray(csvFilePath, callback) {
  var migrationArray = [];
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data) => {
      migrationArray.push(data);
    })
    .on("end", () => {
      callback(null, migrationArray);
    })
    .on("error", (error) => {
      callback(error);
    });
}

const csvFilePath = "./migration2.csv";

csvToArray(csvFilePath, (error, array) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("array:", array[6]);
});

export default csvToArray;
