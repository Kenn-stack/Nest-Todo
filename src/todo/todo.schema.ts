import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";


export type TodoDocument = Todo & Document;



export class Todo{

    @Prop()
    _id: ObjectId

    @Prop()
    task: string;

    @Prop({default: false})
    completed: boolean;

    @Prop()
    createdAt: Date;
}


export const TodoSchema = SchemaFactory.createForClass(Todo)