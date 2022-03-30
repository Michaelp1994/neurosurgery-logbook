import { InputType, Field, ID } from "type-graphql";
import { Rotation } from "../models/Rotation";

@InputType({ description: "Input for creating Rotation type" })
export class CreateRotationInput implements Partial<Rotation> {
    @Field()
    name: string;
    @Field()
    startDate: Date;
    @Field()
    endDate: Date;
    @Field()
    setLevelId: number;
    @Field(() => [Number], { nullable: true })
    supervisorIds?: number[];
    @Field()
    hospitalId: number;
}

@InputType({ description: "Input for updating a Rotation" })
export class UpdateRotationInput implements Partial<Rotation> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    startDate?: Date;
    @Field({ nullable: true })
    endDate?: Date;
    @Field({ nullable: true })
    setLevelId?: number;
    @Field(() => [Number], { nullable: true })
    supervisorIds?: number[];
    @Field({ nullable: true })
    hospitalId?: number;
}

@InputType({ description: "Input for deleting a Rotation" })
export class DeleteRotationInput implements Partial<Rotation> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing a Rotation" })
export class RotationInput implements Partial<Rotation> {
    @Field(() => ID)
    id: number;
}
