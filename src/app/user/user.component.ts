import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };

  @Output() select = new EventEmitter<string>(); // @Output marks that this property can emit events to any parent component interested

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // emit an event to parent component on clicking or selecting the user
  }
}
