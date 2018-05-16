Start server with `ts-node src/server.js`, then navigate to either `localhost:8888/user` or `localhost:8888/order`

Sample request for user:
```
query {
  getByEmail(email: "{user email}") {
    _id
    email
    name
    apiKey
	}
}
```

```
mutation {
  updateName(_id: "{mongo id}", name: "yolo swag") {
    _id
    name
  }
}
```
