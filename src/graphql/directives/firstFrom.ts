import { SchemaDirectiveVisitor } from "graphql-tools";
import { GraphQLField } from "graphql";

export class FirstFromDirective extends SchemaDirectiveVisitor {

  visitFieldDefinition(field: GraphQLField<any,any>) {
    const { from } = this.args;
    field.resolve = (source:any) => {
      return String(source[from]).split(' ')[0];
    }
  }
}