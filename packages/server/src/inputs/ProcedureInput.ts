import { InputType, Field, ID } from "type-graphql";
import { Procedure } from "../models/Procedure";

@InputType({ description: "Input for creating procedure by an admin" })
export class CreateProcedureInput implements Partial<Procedure> {
    @Field()
    name: string;
    @Field()
    typeId: number;
}

@InputType({ description: "Input for updating procedure by an admin" })
export class UpdateProcedureInput implements Partial<Procedure> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    typeId?: number;
}

@InputType({ description: "Input for deleting Procedure" })
export class DeleteProcedureInput implements Partial<Procedure> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing Procedure" })
export class ProcedureInput implements Partial<Procedure> {
    @Field(() => ID)
    id: number;
}
