import { Component } from '@angular/core';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

@Component({
  selector: 'my-app',
  template: `<h1>Click a person to navigate to the details</h1>
           <router-outlet></router-outlet>
            `,
  providers: [PersonDataService]
})
export class AppComponent {

}

