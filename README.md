Start server with `ts-node src/server.js`, then navigate to localhost:8888/user

Sample query:
`
{
  user(email: "a@b.c") {
    email
    name
    apiKey
	}
}
`

Sample mutation:
`
mutation {
  updateName(email: "c@b.a", name: "yolo swag") {
    email
    name
  }
}
`
