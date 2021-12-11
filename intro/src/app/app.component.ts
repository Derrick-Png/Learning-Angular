import { Component } from '@angular/core';
import { RecordsService } from './records.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'intro';
  lol = {};
  constructor(private myFirstService : RecordsService)
  {

  }
  ngOnInit(){
    this.lol =this.myFirstService.getData()
  }
  
}
