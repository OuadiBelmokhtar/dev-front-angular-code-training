import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataEmittedFromChildComponent: string = "";

  captureEventAndDataFromChild(capturedData: any) {
    this.dataEmittedFromChildComponent = capturedData;
  }
}
