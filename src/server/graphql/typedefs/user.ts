export const userTypeDefs: string = `
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
