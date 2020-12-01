import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarusugeoPage } from './buscarusugeo.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarusugeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarusugeoPageRoutingModule {}
