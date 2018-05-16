"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_script_1 = require("coffee-script");
coffee_script_1.register();
const oo_data_1 = require("oo-data");
exports.userResolvers = {
    Query: {
        user(_root, args) {
            return oo_data_1.User.findOne({ email: args.email }).lean(true).exec();
        },
        allUsers() {
            return oo_data_1.User.find().lean(true).exec();
        },
    },
    Mutation: {
        updateName(_root, args) {
            return oo_data_1.User.findOneAndUpdate({ email: args.email }, { $set: { name: args.name } }).lean(true).exec();
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvZ3JhcGhxbC9yZXNvbHZlcnMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF1QztBQUFDLHdCQUFRLEVBQUUsQ0FBQTtBQUNsRCxxQ0FBNkI7QUFFaEIsUUFBQSxhQUFhLEdBQVE7SUFDaEMsS0FBSyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEtBQVUsRUFBRSxJQUFTO1lBQ3hCLE9BQU8sY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsQ0FBQztRQUNELFFBQVE7WUFDTixPQUFPLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsVUFBVSxDQUFDLEtBQVUsRUFBRSxJQUFTO1lBQzlCLE9BQU8sY0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRyxDQUFDO0tBQ0Y7Q0FDRixDQUFDIn0=