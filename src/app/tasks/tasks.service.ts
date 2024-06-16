import { Injectable } from '@angular/core';
import { NewTaskDetials } from './task/task.model';

@Injectable({ providedIn: 'root' }) // have to add this in order to make a class, a service, injectable
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addOneTask(task: NewTaskDetials, userId: string) {
    var oneTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.descritpion,
      dueDate: task.date,
    };
    this.tasks.unshift(oneTask); // TO ADD IT TO START OF ARRAY USE unshift instead of push (builtin JS method)
  }

  removeOneTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
