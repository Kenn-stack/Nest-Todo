import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto, UpdateDto } from './todo.interface';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>){}


    async create(createDto: CreateDto){
        return await new this.todoModel({...createDto, createdAt: new Date()}).save()
    }

    
    async findOne(query: string, query_param: any){
        return await this.todoModel.findOne({[query]: query_param})
    }

    
    async findAll(){
        return await this.todoModel.find()
    }


    async update(query: string,
                query_param: any,
                updateDto: UpdateDto){
        return await this.todoModel.findOneAndUpdate({[query]: query_param}, updateDto)
    }


    async delete(query: string, query_param: any){
        return await this.todoModel.findOneAndDelete({[query]: query_param})
    }



}
