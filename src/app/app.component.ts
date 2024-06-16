import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // because we have included it in the app.module, we have to remove imports from here
  // as the module have imports which can handle all the imports that were declared here earlier..
  title = 'first-angular-9June';
  users = DUMMY_USERS;
  selectedId?: string;

  onSelectedUser(id: string) {
    console.log('User selected:', id);
    this.selectedId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId);
  }
}
