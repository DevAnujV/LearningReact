import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { AppComponent } from '../app.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, AppComponent, NewTaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() personName!: string;
  @Input() usrId!: string;
  isAddingTask: boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all basic and Advanced Angular concepts',
      dueDate: '2021-06-30',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular 2',
      summary: 'Learn all basic and Advanced Angular concepts 2',
      dueDate: '2021-07-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular 3',
      summary: 'Learn all basic and Advanced Angular concepts 3A',
      dueDate: '2021-07-02',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master Angular 3',
      summary: 'Learn all basic and Advanced Angular concepts 3B',
      dueDate: '2021-07-02',
    },
  ];

  get filteredTasks() {
    return this.tasks.filter((task) => task.userId === this.usrId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addOneTask(usrId: string) {
    var oneTask = {
      id: 't5',
      userId: usrId,
      title: 'Master Angular 4',
      summary: 'Learn all basic and Advanced Angular concepts 3C',
      dueDate: '2021-07-03',
    };
    this.tasks.push(oneTask);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
