import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectionStatus } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class NetstatusService {

  constructor() { }

  public netStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  //netstatus updated by app.component.ts

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.netStatus.asObservable();
  }
 
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.netStatus.getValue();
  }
}

