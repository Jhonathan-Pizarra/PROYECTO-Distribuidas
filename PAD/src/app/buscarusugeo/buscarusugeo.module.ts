import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarusugeoPageRoutingModule } from './buscarusugeo-routing.module';

import { BuscarusugeoPage } from './buscarusugeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarusugeoPageRoutingModule
  ],
  declarations: [BuscarusugeoPage]
})
export class BuscarusugeoPageModule {}
