import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingService } from '../loggingService.service';
import { appService } from '../app.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private myAppService:appService){
    

  };


  onSetTo(status: string) {
    this.myAppService.onStatusChanged(this.id, status);
    this.myAppService.statusUpdated.emit(status);
    // this.serviceLog.logStatusChanged(status);
  }
}
