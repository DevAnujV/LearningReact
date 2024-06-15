import { Time } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model'; // we can add keyword type there just to specify that it is type that we imported nothing like an extension or library!

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
