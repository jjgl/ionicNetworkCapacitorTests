import { Injectable, OnDestroy } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { BehaviorSubject, Observable } from 'rxjs';

const { Network } = Plugins;

export enum ConnectionStatus {
  Online,
  Offline
}

@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  private netStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  constructor() { 
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Service Network status changed", status);
      this.networkStatus = status;
      let auxStatus = status && status.connected ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.netStatus.next(auxStatus)
    });
    this.initialState()
  }
  

  private async initialState(){
    this.networkStatus = await Network.getStatus();
    let auxStatus = this.networkStatus && this.networkStatus.connected ? ConnectionStatus.Online : ConnectionStatus.Offline;
    this.netStatus.next(auxStatus)
  }
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.netStatus.asObservable();
  }
 
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.netStatus.getValue();
  }

}
