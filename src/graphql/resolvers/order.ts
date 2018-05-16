import {register} from "coffee-script"; register()
import {Order, generateObjectId} from "oo-data";

export const orderResolvers: any = {
  Query: {
    getById(_root: any, args: {_id: string}): any {
      return Order.findById(generateObjectId(args._id)).lean(true).exec();
    },
  },
  Mutation: {
    updateStatus(_root: any, args: {_id: string, status: string}): any {
      return Order.findByIdAndUpdate(generateObjectId(args._id), {$set: {status: args.status}}).exec();
    }
  }
};
