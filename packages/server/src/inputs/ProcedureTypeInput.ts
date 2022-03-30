import { InputType, Field, ID } from "type-graphql";
import { ProcedureType } from "../models/ProcedureType";

@InputType({ description: "Input for creating procedure type by an admin" })
export class CreateProcedureTypeInput implements Partial<ProcedureType> {
    @Field()
    name: string;
}

@InputType({ description: "Input for updating a procedure by an admin" })
export class UpdateProcedureTypeInput implements Partial<ProcedureType> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name?: string;
}

@InputType({ description: "Input for deleting a procedure by an admin" })
export class DeleteProcedureTypeInput implements Partial<ProcedureType> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing a procedure" })
export class ProcedureTypeInput implements Partial<ProcedureType> {
    @Field(() => ID)
    id: number;
}
