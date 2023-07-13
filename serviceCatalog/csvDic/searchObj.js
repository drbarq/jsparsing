// import csvParser from "csv-parser";
// import fs from "fs";

const csvFilePath = "./migration.csv";

import csvToDictionary from "./index.js";

function localCsvToDictionary(path) {
  csvToDictionary(path, (error, dictionary) => {
    if (error) {
      // console.error("Error:", error);
      return;
    }
    // console.log("2Dictionary:", dictionary);
    return dictionary;
  });
}
// csvToDictionary(path, (error, dictionary) => {
//   if (error) {
//     // console.error("Error:", error);
//     return;
//   }
//   //   console.log("2Dictionary:", dictionary);
//   return dictionary;
// });

function findEntriesWithValue(dictionary, property_name, value, callback) {
  console.log(dictionary, "dictionay ");
  const result = {};
  for (const key in dictionary) {
    if (
      dictionary.hasOwnProperty(key) &&
      dictionary[key][property_name] === value
    ) {
      result[key] = dictionary[key];
    }
  }
  callback(result);
}

findEntriesWithValue(
  localCsvToDictionary(csvFilePath),
  "sex",
  "Female",
  function (result) {
    console.log(result, "result");
    for (const key in result) {
      console.log(key + ": ", result[key]);
    }
  }
);
