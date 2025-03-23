import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";

@Component({ // Decorator; adds metadata to the class. Comes from the Angular core package.
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {  // class called AppComponent. This class creates a custom element called app-root.

}
