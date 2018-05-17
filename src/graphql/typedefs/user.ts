export const userTypeDefs: string = `
  type User {
    _id: String!
    email: String!
    apiKey: String!
    name: String!
  }

  type Query {
    getById(_id: String): User
    getByEmail(email: String): User
    getAll: [User]
  }

  type Mutation {
    updateName(_id: String, name: String): User
  }
`;
