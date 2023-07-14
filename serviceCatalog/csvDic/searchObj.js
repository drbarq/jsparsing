// import csvParser from "csv-parser";
// import fs from "fs";

const csvFilePath = "./migration.csv";

import csvToDictionary from "./index.js";

let femaleEntries = [];

function localCsvToDictionary(path) {
  csvToDictionary(path, (error, dictionary) => {
    if (error) {
      console.error("Error:", error);
      return;
    }

    // findEntriesWithValue(dictionary, "sex", "Female", function (result) {
    //   console.log(result, "result 1 ");
    //   for (const key in result) {
    //     // let curEntry = key : result[key]
    //     femaleEntries.push(result[key]);
    //     // console.log(key + ": ", result[key], "yes");
    //   }
    //   //   console.log(femaleEntries, "female entries1");
    //   return femaleEntries;
    // });
    findEntriesWithValue(dictionary, "sex", "Female", function (result) {
      //   console.log(result, "result 1 ");
      //   for (const key in result) {
      //     // let curEntry = key : result[key]
      //     femaleEntries.push(result[key]);
      //     // console.log(key + ": ", result[key], "yes");
      //   }
      //   console.log(femaleEntries, "female entries1");
      //   return femaleEntries;

      for (const key in result) {
        // console.log(key, "key");
        femaleEntries.push(result[key]);
      }
      //   console.log(result, "result444");
      //   console.log(femaleEntries, "female entries1");

      return femaleEntries;
    });
  });
}

function findEntriesWithValue(dictionary, property_name, value, callback) {
  //   console.log(dictionary, "dictionay ");
  const result = {};
  for (const key in dictionary) {
    if (
      dictionary.hasOwnProperty(key) &&
      dictionary[key][property_name] === value
    ) {
      result[key] = dictionary[key];
      //   femaleEntries.push(result[key]);
      //   console.log(key, "key"); - row_#
    }
  }
  //   console.log(result, "result");
  //   callback(result);
  callback(result);
}

let femaleObj = localCsvToDictionary(csvFilePath);
//
console.log(femaleObj, "femailobj");
