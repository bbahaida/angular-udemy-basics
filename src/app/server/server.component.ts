import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online{
            color: white;
        }
    `],
})
export class ServerComponent{
    server: Server;

    constructor(){
        this.server = {
            serverId: 10,
            serverStatus: Math.random() > 0.5 ? 'online': 'offline',
        }
    }

    
    getServerStatus(){
        return this.server.serverStatus;
    }
    getColor(): string{
        return this.server.serverStatus === 'online' ? 'green' : 'red';
    }
}

export interface Server{
    serverId: number;
    serverStatus: string;
}