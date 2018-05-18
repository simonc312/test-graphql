export const userTypeDefs: string = `
  #Someone who can place orders on SP
  type User {
    #Unique identifier for backend services
    _id: String!
    #Good for email marketing campaigns
    email: String!
    """
      Multiline
      description
    """
    apiKey: String!
    #First and last name together
    name: String!

    swag: String @deprecated(reason: "No more yolo.")
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
