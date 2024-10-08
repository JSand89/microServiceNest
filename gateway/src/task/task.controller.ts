import { Controller, Inject,Post, Body } from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices"
import {Observable} from "rxjs"
import { TaskDTO } from './dto/task.dto';
@Controller('/api/task')
export class TaskController {
    constructor(
        @Inject("TASK_SERVICE") private readonly client: ClientProxy
    ){}

    async onModuleInit(){
        await this.client.connect()
    }

    @Post()
    create(@Body() taskDTO:TaskDTO):Observable<any>{
        return this.client.send({cmd:"create-task"},taskDTO)
    }

}
