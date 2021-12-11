import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){
    return [{name:"hue", online:true},  {name:"ya", online:false}, {name:"boom", online:false}]
  }
}
