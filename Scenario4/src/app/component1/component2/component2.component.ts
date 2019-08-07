import { Component, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  //event to display the data
  fireEvent()
  {
    this.childEvent.emit('Hey IBM')
  }

}
