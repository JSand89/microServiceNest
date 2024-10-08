import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices"
import { TaskDTO } from './dto/task.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd:"create-task"})
  createTask(taskDTO:TaskDTO){
    return this.appService.create(taskDTO)
  }


}
