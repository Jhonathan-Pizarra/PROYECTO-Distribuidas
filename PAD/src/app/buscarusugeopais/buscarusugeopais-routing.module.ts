import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarusugeopaisPage } from './buscarusugeopais.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarusugeopaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarusugeopaisPageRoutingModule {}
