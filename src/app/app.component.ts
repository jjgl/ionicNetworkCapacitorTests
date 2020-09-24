import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NetstatusService } from './services/netstatus.service';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { Subscription } from 'rxjs';
import { ConnectionStatus } from './services/network.service';

const { Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  subscription : Subscription
  private statusOnline : boolean;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private netstatusservice: NetstatusService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("App component Network status changed", status);
      this.networkStatus = status;
      let auxStatus = status && status.connected ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.netstatusservice.netStatus.next(auxStatus) // Push the new status to NetworkService behaviorSubject
    });
    this.networkStatus = await Network.getStatus();
    let auxStatus = this.networkStatus && this.networkStatus.connected ? ConnectionStatus.Online : ConnectionStatus.Offline;
    this.netstatusservice.netStatus.next(auxStatus)
  }
}
