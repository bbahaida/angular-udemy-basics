import { Server } from './_shared/server.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Server[] = [new Server('server','test','test')];
  
  onServerAdded(server: Server){
    this.serverElements.push(server);
  }
}
