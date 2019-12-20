import { Component, EventEmitter, Output } from '@angular/core';
import {loggingService} from '../loggingService.service';
import {appService} from '../app.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  constructor(private myAppService:appService){
    this.myAppService.statusUpdated
    .subscribe((status:string)=> alert("This is the new Status"+status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.myAppService.onAccountAdded(accountName, accountStatus);
    // this.serviceLog.logStatusChanged(accountStatus);
  }
  

}
