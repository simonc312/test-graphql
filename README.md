Start server with `ts-node src/server/server.js`, then navigate to localhost:8888/

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
  updateName(email: "c@b.a", name: "awwww yeah") {
    email
    name
  }
}
`
