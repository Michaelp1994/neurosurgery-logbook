import { InputType, Field, ID } from "type-graphql";
import { Hospital } from "../models/Hospital";

@InputType({ description: "Input for creating supervisor type" })
export class CreateHospitalInput implements Partial<Hospital> {
    @Field()
    name: string;
    @Field()
    urnMask: string;
}

@InputType({ description: "Input for updating a supervisor" })
export class UpdateHospitalInput implements Partial<Hospital> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    urnMask: string;
}

@InputType({ description: "Input for deleting a supervisor" })
export class DeleteHospitalInput implements Partial<Hospital> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing a supervisor" })
export class HospitalInput implements Partial<Hospital> {
    @Field(() => ID)
    id: number;
}
