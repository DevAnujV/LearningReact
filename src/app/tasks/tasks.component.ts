import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { AppComponent } from '../app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskDetials } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() personName!: string;
  @Input() usrId!: string;
  isAddingTask: boolean = false;

  // Here, we need the task service like so -
  // private taskService = new TaskService(); but this way if we use it in other component, we have to
  // instantiate it there too, due to which if we change the data of tasks service thats manager by
  // the service in another component, those changes wont be reflected here because we would be operating
  //on different instances of that tasksService.
  // Thats why we have to use Dependency Injection (done by constructor) and specifying it dependency that we need

  constructor(public tasksService: TasksService) {
    // this is how we define and inject dependency. Angular will make the object and refer it everywhere itself. kind of pass by reference
    // private -> This property is only accessible from inside the class
    // public -> This property is also accessible from outside the class(e.g. from inside the template)
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.tasksService.getUserTasks(id);
  }
}
