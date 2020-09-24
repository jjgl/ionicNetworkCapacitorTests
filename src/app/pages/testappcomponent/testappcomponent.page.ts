import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NetstatusService } from 'src/app/services/netstatus.service';
import { ConnectionStatus } from 'src/app/services/network.service';

@Component({
  selector: 'app-testappcomponent',
  templateUrl: './testappcomponent.page.html',
  styleUrls: ['./testappcomponent.page.scss'],
})
export class TestappcomponentPage implements OnInit {
  subscription : Subscription
  private statusOnline : boolean;

  constructor(private netstatusservice: NetstatusService) { }


  async ngOnInit() {
    console.log('Test Init')
    this.subscription = this.netstatusservice.onNetworkChange().subscribe((status: ConnectionStatus) => {
      this.statusOnline = status == ConnectionStatus.Online ? true : false;
      console.log('TESTAppComp: network change, status:', status);
    })
  }

  ngOnDestroy() { 
    console.log('test app comp destroyed')
    this.subscription.unsubscribe()
    //this.networkService.ngOnDestroy()
  }

}
