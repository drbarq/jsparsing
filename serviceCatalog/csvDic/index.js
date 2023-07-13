const csv = require("csv-parser");
const fs = require("fs");

function csvToDictionary(csvFilePath, callback) {
  const dictionary = {};

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data) => {
      //   console.log(data, "data");
      const key = data["Key"];
      const value = data["Value"];

      dictionary[key] = value;
    })
    .on("end", () => {
      callback(null, dictionary);
    })
    .on("error", (error) => {
      callback(error);
    });

  console.log(dictionary, "dictionary");
}

// Usage:
const csvFilePath = "./migration_data.csv";

csvToDictionary(csvFilePath, (error, dictionary) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log("Dictionary:", dictionary);
});
