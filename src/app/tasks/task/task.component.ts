import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model'; // we can add keyword type there just to specify that it is type that we imported nothing like an extension or library!

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(taskId: string) {
    this.tasksService.removeOneTask(taskId);
  }
}
