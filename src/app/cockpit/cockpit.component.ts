import { Server } from './../_shared/server.model';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  /* serverName = '';
  serverContent = ''; */
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  
  onAddServer(input: HTMLInputElement){
    
    this.serverCreated.emit(new Server('server',input.value, this.serverContentInput.nativeElement.value));
  }
  onAddBlueprint(input: HTMLInputElement){
    this.serverCreated.emit(new Server('blueprint',input.value, this.serverContentInput.nativeElement.value));
  }

}
