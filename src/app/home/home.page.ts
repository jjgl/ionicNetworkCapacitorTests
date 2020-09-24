import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { Subscription } from 'rxjs';
import { NetstatusService } from '../services/netstatus.service';
import { ConnectionStatus } from '../services/network.service';

const { Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  subscription : Subscription
  private statusOnline : boolean;

  constructor(private netstatusservice: NetstatusService) { }
  
  @HostListener('ionViewWillEnter')
  async ngOnInit() {
    console.log('Home Init')
    this.subscription = this.netstatusservice.onNetworkChange().subscribe((status: ConnectionStatus) => {
      this.statusOnline = status == ConnectionStatus.Online ? true : false;
      console.log('Home: network change, status:', status);
    })
  }
  
  @HostListener('ionViewDidLeave')
  ngOnDestroy() { 
    console.log('home comp destroyed')
    this.subscription.unsubscribe()
  }


  // networkStatus: NetworkStatus;
  // networkListenerHome: PluginListenerHandle;
  
  // async ngOnInit() {
  //   console.log('Home Init')
  //   this.networkListenerHome = Network.addListener('networkStatusChange', (status) => {
  //     console.log("Home Page Network status changed", status);
  //     this.networkStatus = status;
  //   });

  //   this.networkStatus = await Network.getStatus();
  // }

  // ngOnDestroy() {
  //   this.onDestroy()
  // }

  // //@HostListener('window:beforeunload')
  // @HostListener('ionViewDidLeave')
  // onDestroy() {
  //   console.log('home destroyed')
  //   this.networkListenerHome.remove();
  // }
}