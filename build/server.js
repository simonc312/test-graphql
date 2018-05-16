"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const index_1 = require("./graphql/index");
const PORT = 8888;
const app = express();
app.use('/', graphqlHTTP({
    schema: index_1.default,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsK0NBQStDO0FBQy9DLDJDQUF5QztBQUV6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3ZCLE1BQU0sRUFBRSxlQUFVO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDLENBQUM7QUFFSixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQyJ9