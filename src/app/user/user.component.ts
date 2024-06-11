import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // @Input marks that this property is settable from outside by parent
  @Input({ required: true }) name!: string; //adding required to the input decorator so that it can show error incase we forgets to set this property in html file.
  @Output() select = new EventEmitter<string>(); // @Output marks that this property can emit events to any parent component interested

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id); // emit an event to parent component on clicking or selecting the user
  }
}
