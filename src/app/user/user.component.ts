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
  @Input({ required: true }) avatar!: string; // @Input marks that this property is settable from outside by parent
  @Input({ required: true }) name!: string; //adding required to the input decorator so that it can show error incase we forgets to set this property in html file.

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {}
}
