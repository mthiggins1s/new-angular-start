import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string; // ? tells TS that its fine that 'name' might not be SET. The alternative would be to change the type to 'undefined' with a union type ( | ).
}
