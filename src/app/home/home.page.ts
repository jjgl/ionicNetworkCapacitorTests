import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  networkStatus: NetworkStatus;
  networkListenerHome: PluginListenerHandle;

  async ngOnInit() {
    this.networkListenerHome = Network.addListener('networkStatusChange', (status) => {
      console.log("Home Page Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();
  }

  ngOnDestroy() {
    console.log('home destroyed')
    this.networkListenerHome.remove();
  }
}