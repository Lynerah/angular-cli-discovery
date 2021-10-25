import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //Way one to style component: setting style ou styleUrl metadata
  // styles:['h2{color: green}']
  styleUrls: ['./child.component.css']

})
export class ChildComponent implements OnInit {
@Input() childMessage!: string;
@Output() messageEvent = new EventEmitter<string>();
  message = 'message from child';
constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }
}
