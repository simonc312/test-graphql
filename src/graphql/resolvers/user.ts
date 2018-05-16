import {register} from "coffee-script"; register()
import {User, generateObjectId} from "oo-data";

export const userResolvers: any = {
  Query: {
    getById(_root: any, args: {_id: string}): any {
      return User.findById(generateObjectId(args._id)).lean(true).exec();
    },
    getByEmail(_root: any, args: {email: string}): any {
      return User.findOne({email: args.email}).lean(true).exec();
    },
    getAll(): any {
      return User.find().lean(true).exec();
    },
  },
  Mutation: {
    updateName(_root: any, args: {_id: string, name: string}): any {
      return User.findByIdAndUpdate(generateObjectId(args._id), {$set: {name: args.name}}).exec();
    }
  }
};
