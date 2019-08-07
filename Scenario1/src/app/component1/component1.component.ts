import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  //function used to print the user given message in the console usin log method
  logMessage(value)
  {
    console.log(value);
  }
}
