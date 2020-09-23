import { Component, OnDestroy, OnInit } from '@angular/core';
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
    console.log('hola')
    this.subscription = this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
      this.statusOnline = status == ConnectionStatus.Online ? true : false;
      console.log('network change, status:', status);
    })
  }

  ngOnDestroy() { 
    console.log('test destroyed')
    this.subscription.unsubscribe()
  }

}
