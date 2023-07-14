const csvFilePath = "./migration.csv";
import csvToDictionary from "./index.js";

function localCsvToDictionary(path, property_name, value) {
  return new Promise((resolve, reject) => {
    csvToDictionary(path, (error, dictionary) => {
      if (error) {
        console.error("error", error);
        reject(error);
        return;
      }

      //   let result = findEntriesWithValue(dictionary, "sex", "male");
      let result = findEntriesWithValue(dictionary, property_name, value);
      //   console.log(typeof result);
      if (typeof result === "string") {
        resolve("no values found");
      }
      let femaleEntries = Object.values(result);
      resolve(femaleEntries);
    });
  });
}

function findEntriesWithValue(dictionary, property_name, value) {
  //   console.log(dictionary, "dictionary");
  let result = {};
  for (const [key, entry] of Object.entries(dictionary)) {
    // Object.entries: Instead of using a for...in loop, we utilize Object.entries to iterate over the
    // key-value pairs in the dictionary object. This provides a simpler and more concise way to loop through the entries.
    if (entry.hasOwnProperty(property_name) && entry[property_name] === value) {
      result[key] = entry;
    }
  }
  if (Object.keys(result).length < 1) {
    return "no values found";
  }
  return result;
}

async function findEntriesInObj(value, property_name) {
  try {
    let searchResults = await localCsvToDictionary(
      csvFilePath,
      value,
      property_name
    );
    // console.log("searchResults: ", searchResults);
    return `searchResults: ${searchResults}`;
  } catch (error) {
    console.error("Error", error);
  }
}

console.log(await findEntriesInObj("sex", "male"));
