import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  
  lol: Array<any>;

  constructor() {
    
    this.lol = [{name:"hue", online:true},  {name:"ya", online:false}, {name:"boom", online:false}]
    
   }

  ngOnInit(): void {
  }

  submitBtn(){
    console.log("hehe")
  }

}
