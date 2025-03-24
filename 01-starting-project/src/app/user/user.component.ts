import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter(); // allows us to emit custom values through the select property to any parent component thats interested.


  imagePath () {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // passing the id back to the parent component when a user is selected
  }
}


// Signals:
  // a container that contains a value like this: 'selectedUser = signal(DUMMY_USERS[randomIndex]);' and then when you change the value, Angular will be notified of said change, and then is able to identify all places where the change is being used, and then able to UPDATE the places where the value is being used.

  // Why would you create a computed value based on signals?
    // Angular automatically analyzes whether you are reading signal values inside the function you passed to computed(), and then Angular will set up another subscription to that signal thats being used (selectedUser()), and when it recieves a new value, Angular will reconfigure the imagePath.