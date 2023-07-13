const serviceCatalog = {
  userService: {
    name: "User Service",
    description: "Handles user management and authentication",
    endpoints: {
      createUser: {
        method: "POST",
        path: "/users",
        description: "Creates a new user",
      },
      getUser: {
        method: "GET",
        path: "/users/:userId",
        description: "Retrieves user information",
      },
      updateUser: {
        method: "PUT",
        path: "/users/:userId",
        description: "Updates user information",
      },
      deleteUser: {
        method: "DELETE",
        path: "/users/:userId",
        description: "Deletes a user",
      },
    },
  },
  productService: {
    name: "Product Service",
    description: "Handles product management",
    endpoints: {
      createProduct: {
        method: "POST",
        path: "/products",
        description: "Creates a new product",
      },
      getProduct: {
        method: "GET",
        path: "/products/:productId",
        description: "Retrieves product information",
      },
      updateProduct: {
        method: "PUT",
        path: "/products/:productId",
        description: "Updates product information",
      },
      deleteProduct: {
        method: "DELETE",
        path: "/products/:productId",
        description: "Deletes a product",
      },
    },
  },
};

function traverseObject(sc) {
  for (let key in sc) {
    if (typeof sc[key] === "object" && sc[key] !== null) {
      traverseObject(sc[key]);
    } else {
      console.log(`Key: ${key}`);
      console.log(`Value: ${sc[key]}`);
    }
  }
}

traverseObject(serviceCatalog);

// Example usage:
// console.log(serviceCatalog.userService.name); // Output: "User Service"
// console.log(serviceCatalog.userService.endpoints.getUser.method); // Output: "GET"
// console.log(serviceCatalog.productService.endpoints.createProduct.path); // Output: "/products"
