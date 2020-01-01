import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowToAddServer = false;
  serverCreationStatus = 'No Server created!!';
  serverName = 'TestServer'
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];

  constructor() {

    setTimeout(()=>{
      this.allowToAddServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreationStatus = 'Server created successfully with name '+this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
