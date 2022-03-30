import { InputType, Field, ID } from "type-graphql";
import { Supervisor } from "../models/Supervisor";

@InputType({ description: "Input for creating supervisor type" })
export class CreateSupervisorInput implements Partial<Supervisor> {
    @Field()
    name: string;
}

@InputType({ description: "Input for updating a supervisor" })
export class UpdateSupervisorInput implements Partial<Supervisor> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name?: string;
}

@InputType({ description: "Input for deleting a supervisor" })
export class DeleteSupervisorInput implements Partial<Supervisor> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing a supervisor" })
export class SupervisorInput implements Partial<Supervisor> {
    @Field(() => ID)
    id: number;
}
