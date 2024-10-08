import { Injectable } from '@nestjs/common';
import { ITask } from './interfaces/task.interface';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4} from "uuid"
@Injectable()
export class AppService {
  tasks:ITask[] = []

  create(taskDTO:TaskDTO):ITask{
    const task = {
      id:uuidv4(),
      ...taskDTO
    }
    this.tasks.push(task)
    return task
  }

  getHello(): string {
    return 'Hello World!';
  }
}
