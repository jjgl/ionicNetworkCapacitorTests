import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionStatus, NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})

export class TestPagePage implements OnInit, OnDestroy {
  subscription : Subscription
  private statusOnline : boolean;

  constructor(private networkService: NetworkService) {}

  async ngOnInit() {
    console.log('Test Init')
    this.subscription = this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
      this.statusOnline = status == ConnectionStatus.Online ? true : false;
      console.log('TEST: network change, status:', status);
    })
  }

  //@HostListener('unloaded')
  @HostListener('ionViewDidLeave')
  ngOnDestroy() { 
    console.log('test destroyed')
    this.subscription.unsubscribe()
    //this.networkService.ngOnDestroy()
  }

}
