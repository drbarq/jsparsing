import csv from "csv-parser";
import fs from "fs";
import { resolve } from "path";

// import csvToArray from "./migrationArray.js";

// pull in the array

// function csvToArray(csvFilePath, callback) {
//   var migrationArray = [];
//   fs.createReadStream(csvFilePath)
//     .pipe(csv())
//     .on("data", (data) => {
//       migrationArray.push(data);
//     })
//     .on("end", () => {
//       callback(null, migrationArray);
//     })
//     .on("error", (error) => {
//       callback(error);
//     });
// }

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

// everytime it will convert the csv to array, then search it

function localCsvToArray(csvFilePath, property_name, value) {
  return new Promise((resolve, reject) => {
    csvToArray(csvFilePath, (error, array) => {
      if (error) {
        console.error("Error:", error);
        reject(error);
        return;
      }
      //   console.log(array, "array");
      resolve(findInArray(array, property_name, value));
    });
  });
}

function findInArray(array, property_name, value) {
  return array.filter((object) => {
    if (object[property_name] === value) {
      //   console.log("yes");
      return true;
    } else {
      //   console.log("no");
      return false;
    }
  });
}

async function returnArray(csvFilePath, property_name, value) {
  try {
    let searchResults = await localCsvToArray(
      csvFilePath,
      property_name,
      value
    );
    return `searchResults: ${JSON.stringify(searchResults)}`;
  } catch (error) {
    console.log(error, "error");
  }
}

console.log(await returnArray(csvFilePath, "sex", "Female"));
