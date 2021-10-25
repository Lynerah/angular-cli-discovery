import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //Communication via ViewChild : @decorateur (nom du composant enfant) nom donnée à l'sensemble
  // @ViewChild(ChildComponent) child;

  constructor() { }

  ngOnInit(): void {
  }

  // avec le ViewChild initialiser le hook AfterViewInit
  // ngAfterViewInit(){
  //   alert(this.child.message);
  // }

  receiveMessage(msg){
    alert(msg);
  }
}
