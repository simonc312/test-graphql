import {register} from "coffee-script"; register()
import {User} from "oo-data";

export const userResolvers: any = {
  Query: {
    user(_root: any, args: {email: string}): any {
      return User.findOne({email: args.email}).lean(true).exec();
    },
    allUsers(): any {
      return User.find().lean(true).exec();
    },
  },
  Mutation: {
    updateName(_root: any, args: {email: string, name: string}): any {
      return User.findOneAndUpdate({email: args.email}, {$set: {name: args.name}}).lean(true).exec();
    }
  }
};
