"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeDefs = `
  type User {
    email: String!
    apiKey: String
    name: String
  }

  type Query {
    user(email: String): User
    allUsers: [User]
  }

  type Mutation {
    updateName(email: String, name: String): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvZ3JhcGhxbC90eXBlZGVmcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxZQUFZLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JuQyxDQUFDIn0=