import { Component, Input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string; // @Input marks that this property is settable from outside by parent
  @Input() name!: string; // @Input marks that this property is settable from outside by parent

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {}
}
