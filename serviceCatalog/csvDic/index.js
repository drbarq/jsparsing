const csv = require("csv-parser");
const fs = require("fs");

function csvToDictionary(csvFilePath, callback) {
  var dictionary = {};
  let rowIndex = 1;
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data) => {
      const key = `row_${rowIndex}`; // Generate a unique identifier based on row number
      dictionary[key] = data;
      rowIndex++;
      for (var key2 in data) {
        // value = data[key2];
        dictionary[key] = data;
      }
    })
    .on("end", () => {
      callback(null, dictionary);
    })
    .on("error", (error) => {
      callback(error);
    });
}

function csvToArray(csvFilePath, callback) {
  var migrationArray = [];
  //   let rowIndex = 1;
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data) => {
      //   const key = `row_${rowIndex}`; // Generate a unique identifier based on row number

      //   dictionary[key] = data;
      //   rowIndex++;
      migrationArray.push(data);
      //   for (var key2 in data) {
      //     // value = data[key2];
      //     migrationArray.push(data);
      //     // dictionary[key] = data;
      //   }
    })
    .on("end", () => {
      callback(null, migrationArray);
    })
    .on("error", (error) => {
      callback(error);
    });
}

// Usage:
const csvFilePath = "./migration2.csv";

// csvToDictionary(csvFilePath, (error, dictionary) => {
//   if (error) {
//     console.error("Error:", error);
//     return;
//   }

//   console.log("Dictionary:", dictionary);
//   console.log("Dictionary:", dictionary);
//   //   return;
// });
csvToArray(csvFilePath, (error, array) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log("array:", array[6]);
  //   return;
});
