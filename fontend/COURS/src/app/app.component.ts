import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COURS';
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  
  // ...

}