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
  oddNumbers = [1,3,5];
  evenNumbers = [2,4,6];
  onlyOdd = true;
  value = 5;
  onClickOdd(){
    this.onlyOdd = !this.onlyOdd;
  }
}
