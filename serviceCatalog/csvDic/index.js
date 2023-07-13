// const csv = require("csv-parser");
import csv from "csv-parser";
import fs from "fs";
// const fs = require("fs");

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
      // console.log(callback, "1callback");
      callback(null, dictionary);
    })
    .on("error", (error) => {
      callback(error);
    });
}
// function csvToDictionary(csvFilePath, callback) {
//   var dictionary = {};
//   let rowIndex = 1;
//   fs.createReadStream(csvFilePath)
//     .pipe(csv())
//     .on("data", (data) => {
//       const key = `row_${rowIndex}`;
//       // Generate a unique identifier based on row number
//       dictionary[key] = data;
//       rowIndex++;
//     })
//     .on("end", () => {
//       callback(null, dictionary);
//     })
//     .on("error", (error) => {
//       callback(error);
//     });
// }

// Usage:
const csvFilePath = "./migration.csv";

// csvToDictionary(csvFilePath, (error, dictionary) => {
//   if (error) {
//     // console.error("Error:", error);
//     return;
//   }
//   // console.log("2Dictionary:", dictionary);
//   return dictionary;
// });

// csvToDictionary(csvFilePath, (error, dictionary) => {
//   if (error) {
//     // console.error("Error:", error);
//     return;
//   }
//   // console.log("2Dictionary:", dictionary);
//   return dictionary;
// });

// function findEntriesWithValue(dictionary, property_name, value, callback) {
//   console.log(dictionary, "dictionay ");
//   const result = {};
//   for (const key in dictionary) {
//     if (
//       dictionary.hasOwnProperty(key) &&
//       dictionary[key][property_name] === value
//     ) {
//       result[key] = dictionary[key];
//     }
//   }
//   callback(result);
// }

// findEntriesWithValue(
//   localCsvToDictionary(csvFilePath),
//   "sex",
//   "Female",
//   function (result) {
//     console.log(result, "result");
//     for (const key in result) {
//       console.log(key + ": ", result[key]);
//     }
//   }
// );

export default csvToDictionary;
