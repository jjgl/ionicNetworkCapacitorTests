import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestappcomponentPage } from './testappcomponent.page';

const routes: Routes = [
  {
    path: '',
    component: TestappcomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestappcomponentPageRoutingModule {}
