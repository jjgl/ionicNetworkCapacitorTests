import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestappcomponentPageRoutingModule } from './testappcomponent-routing.module';

import { TestappcomponentPage } from './testappcomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestappcomponentPageRoutingModule
  ],
  declarations: [TestappcomponentPage]
})
export class TestappcomponentPageModule {}
