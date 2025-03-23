import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// The boostrapApplication wants a component to bootstrap. 
    // Tells Angular that there is an app-component in the html file and that it should look for its tag to display contents on the webpage.

