// function traverseObject(obj) {
//   const stack = [{ obj, path: "" }];
//   const result = [];

//   while (stack.length > 0) {
//     const { obj: currentObj, path } = stack.pop();

//     for (let key in currentObj) {
//       const value = currentObj[key];
//       const currentPath = path ? `${path}.${key}` : key;

//       if (typeof value === "object" && value !== null) {
//         // Push nested object to the stack for further traversal
//         stack.push({ obj: value, path: currentPath });
//       }

//       // Perform operations on key-value pairs
//       result.push({ path: currentPath, value });
//     }
//   }

//   return result;
// }

function traverseObject(obj, path = "") {
  const result = [];

  for (let key in obj) {
    const value = obj[key];
    const currentPath = path ? `${path}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      result.push({ path: currentPath, value });
      result.push(...traverseObject(value, currentPath));
    } else {
      result.push({ path: currentPath, value });
    }
  }
  return result;
}

// Usage:

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
    h: 5,
  },
  i: 6,
};

const traversed = traverseObject(obj);

console.log(traversed);

// // Traverse the object and print all key-value pairs
// const traversed = traverseObject(obj);
// console.log(traversed);

// // Search for a specific key in the traversed object
// const searchKey = "f";
// const searchResults = traversed.filter((item) => item.path.includes(searchKey));
// console.log(`Search results for key "${searchKey}":`, searchResults);

// [
//     { path: 'a', value: 1 },
//     { path: 'b', value: { c: 2, d: [Object], h: 5 } },
//     { path: 'b.c', value: 2 },
//     { path: 'b.d', value: { e: 3, f: [Object] } },
//     { path: 'b.d.e', value: 3 },
//     { path: 'b.d.f', value: { g: 4 } },
//     { path: 'b.d.f.g', value: 4 }
//     { path: 'b.h', value: 5 },
//     { path: 'i', value: 6 },
//   ]
