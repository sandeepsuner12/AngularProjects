import { Component, Input } from "@angular/core";

@Component({
    selector :'app-server',
   //selector :'[app-server]',
   //selector : '.app-server',
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css'],

})

export class ServerComponent {
    allowServers : boolean = false;
    newServer : string = 'No new Server is Added';
    name : string = null;
    flagServer : boolean = false;
    deatilsFlag :boolean = false;
    logdeatilsClicked : Date[]=[];

    constructor(){

        setInterval(()=>{
            this.allowServers=true;
        },5000);

    }

    onClickedAllow(){
        this.newServer='New server '+this.name +' is created';
        this.flagServer=true;
    }
    
    showDeatils(){
        
        this.logdeatilsClicked.push(new Date());
        this.deatilsFlag = !this.deatilsFlag;
    }

    // getInput(event : InputEvent){
    //     this.name= (<HTMLInputElement>event.target).value;
    //     console.log(this.name);
    // }

}