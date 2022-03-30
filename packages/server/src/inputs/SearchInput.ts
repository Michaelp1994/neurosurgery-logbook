import { Field, InputType } from "type-graphql";

@InputType({ description: "Input for creating consult by a user" })
export class SearchInput {
    @Field()
    search: string;
}
