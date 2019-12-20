import { Component, OnInit } from '@angular/core';
import {appService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[appService]
})
export class AppComponent implements OnInit{
  myAccounts:{name:string, status:string}[]=[];

  constructor(private myAppService:appService){};

  ngOnInit(){
    this.myAccounts=this.myAppService.accounts;
  }
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
