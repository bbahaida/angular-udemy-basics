import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // works
  /* selector: '[app-servers]', */ // works
  /* selector: '.app-servers', */ // works
  /* selector: '#app-servers', */ // not works
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer= false;
  show = false;
  serverName = "";
  servers = ['Server 1','Server 2'];

  onCreateServer(){
    this.show = true;
    this.servers.push(this.serverName);
  }

  /* onUpdateServerName(event: Event){

    this.serverName = (<HTMLInputElement>event.target).value;
    this.allowAddServer = this.isAllowed();
  } */

  isAllowed(): boolean{
    return this.serverName !== '';
  }
  isShowed(): boolean{
    return (this.show && this.isAllowed());
  }
  

  ngOnInit() {
  }

}
