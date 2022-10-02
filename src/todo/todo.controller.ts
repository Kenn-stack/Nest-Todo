import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateDto, UpdateDto } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}


    @Post('create')
    create(@Body() createDto: CreateDto){
        return this.todoService.create(createDto)
    }

    @Get(':id')
    findone(@Param('id') id: string){
        return this.todoService.findOne('id', id)
    }

    @Get()
    index(){
        return this.todoService.findAll()
    }

    @Patch('update/:id')
    update(@Param('id') id: string,
            @Body() updateDto: UpdateDto){
        return this.todoService.update('id', id, updateDto)}
    

    
    @Delete('delete/:id')
    delete(@Param('id') id: string){
        return this.todoService.delete('id', id)
    }
}
