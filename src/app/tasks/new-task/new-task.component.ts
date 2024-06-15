import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskDetials } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredDiscription = '';
  enteredDate = '';

  @Output() cancelWork = new EventEmitter<void>();
  @Output() submitTask = new EventEmitter<NewTaskDetials>();

  onCancel() {
    this.cancelWork.emit(); // basically in Hindi -
    // jab yeh wala function chala, when we click on cancel button in new-task template, it will
    // say cancelWork to emit, ya fir yeh kahega ki cancelWork trigger ho,
    //  cancelWork jab trigger hua, to chalayega (cancel)="onCancelAddTask() in the file tasks.component.html
    // mtlb fir vo onCancelAddTask function chalega and hence component disable hojayega because
    //   this.isAddingTask = false hojayega

    // Yaha samajhna yeh hai ki, cancel output hai and dhyaan se dekho, vo round brackets me hai ()
    // Input hamesha [] me hota, round bracket ka mtlb hi yeh hai ki tu chal, execute ho, jiske kaaran
    // onCancelAddTask execute hua..... Thats how this all this works.. And humne agar kuch emit bhi krna hua,
    // vo bhi emit hoke onCancelAddTask($event) $event me aajana tha because vo execute hua, control pass hua!!!!!
  }

  handleSubmit() {
    this.submitTask.emit({
      title: this.enteredTitle,
      date: this.enteredDate,
      descritpion: this.enteredDiscription,
    });
  }
}