import { Component } from '@angular/core';
import * as _moment from "moment";
import * as _rollupMoment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  months:string[] = [];

  constructor() {

    let month = new Date().getMonth();
    let year = new Date().getFullYear() - 1;

    for(var i = 0; i <= 12; i++) {

      let date = new Date(year,month,1,0,0,0,0);

      this.months.push(_moment(date).format("MMMM"));      

      if(month + 1 > 11) {
        month = 0;
        year++;
      }
      else {
        month++;
      }
    }
    
  }
}
