import { Server } from './../_shared/server.model';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, SimpleChanges, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // Node, Native(Shadow dom not supported by all the browsers), Emulated(default) 
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  /* @Input('srvElement') element: Server; */
  @Input() name;
  constructor() {
    console.log('constructor called!');
   }

  ngOnInit() {
    console.log('ngOnInit called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
