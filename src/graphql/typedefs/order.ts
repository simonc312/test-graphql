export const orderTypeDefs: string = `
  type Order {
    _id: String!
    orderToken: String
    status: String
    mode: String
  }

  type Query {
    getById(_id: String): Order
  }

  type Mutation {
    updateStatus(_id: String, status: String): Order
  }
`;
