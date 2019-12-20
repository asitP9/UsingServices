import { loggingService } from "./loggingService.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class appService{
    accounts=[{
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }];

      statusUpdated=new EventEmitter<String>();
      constructor(private myLoggingService:loggingService){};
      onAccountAdded(name: string, status: string) {
        this.accounts.push({name:name, status:status});
        this.myLoggingService.logStatusChanged(status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status =newStatus;
        this.myLoggingService.logStatusChanged(newStatus);

      }
}